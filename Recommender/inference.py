import pickle
import pandas as pd
import numpy as np
import flask
from flask import request
import json

from nltk.corpus import stopwords
from nltk import download
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import word_tokenize
import re

import gensim.downloader
import ssl
import ast

LOCAL_RUN = False
AWS_PORT = 8080

ssl._create_default_https_context = ssl._create_unverified_context

download('stopwords')
download('punkt')
download('wordnet')
download('omw-1.4')

STOPWORDS = set(stopwords.words('english'))
MIN_WORDS = 4
MAX_WORDS = 200
MIN_WORDS_CATEGORY = 1
MAX_WORDS_CATEGORY = 10
PATTERN_S = re.compile("\'s")  # matches `'s` from text
PATTERN_RN = re.compile("\\r\\n")  # matches `\r` and `\n`
PATTERN_PUNC = re.compile(r"[^\w\s]")  # matches all non 0-9 A-z whitespace

# instantiate the model
model = gensim.downloader.load('glove-wiki-gigaword-50')
# get the dataset
df = pd.read_csv('podcasts_sampled.csv')

df['tok_lem_desc'] = df['tok_lem_desc'].apply(ast.literal_eval)
df['tok_lem_categories'] = df['tok_lem_categories'].apply(ast.literal_eval)


def clean_text(text):
    """
    Series of cleaning. String to lower case, remove non words characters and numbers.
        text (str): input text
    return (str): modified initial text
    """
    text = text.lower()
    # replace the non-alphanumeric chars with ' '
    text = re.sub(PATTERN_S, ' ', text)
    text = re.sub(PATTERN_RN, ' ', text)
    text = re.sub(PATTERN_PUNC, '', text)
    return text


def tokenizer(sentence, min_words=MIN_WORDS, max_words=MAX_WORDS, stopwords=STOPWORDS):
    """
    Lemmatize, tokenize, crop and remove stop words.
    """
    # gets the lemmatized word for each tokenized word in a sentence
    stemmer = WordNetLemmatizer()
    tokens = [stemmer.lemmatize(w) for w in word_tokenize(sentence)]

    tokens = [w for w in tokens if (len(w) > min_words and len(w) < max_words and w not in stopwords)]

    return tokens


def remove_html_tags(text):
    """Remove html tags from a string"""
    import re
    clean = re.compile('<.*?>')
    return re.sub(clean, '', text)


def clean_sentences(df, column, max_words, min_words):
    """
    Remove irrelavant characters (in new column clean_sentence).
    Lemmatize, tokenize words into list of words (in new column tok_lem_sentence).
    This changes the dataframe in place
    """
    print('Cleaning sentences...')
    col_name = 'clean_' + column
    col_tok_name = 'tok_lem_' + column
    df[col_name] = df[column].apply(remove_html_tags)
    df[col_name] = df[col_name].apply(clean_text)
    df[col_tok_name] = df[col_name].apply(
        lambda x: tokenizer(x, min_words=min_words, max_words=max_words, stopwords=STOPWORDS))


vocab_dict = model.key_to_index.keys()


def keep_words_from_model(sentence):
    "only keeps the words in the sentence that are in the model vocab"
    sentence_clean = [word for word in sentence if word in vocab_dict]
    return sentence_clean


def calculate_similarity(db_sentence, query):
    "calculates the similarity between two sentences"
    if query and db_sentence:
        return model.n_similarity(db_sentence, query)
    else:
        return 0


app = flask.Flask(__name__)


def clean_input_data(input_data):
    "Cleans & Preprocesses the input data"

    input_data['desc'] = input_data['description_ep'] + input_data['description_pod']
    clean_sentences(input_data, 'desc', MAX_WORDS, MIN_WORDS)
    clean_sentences(input_data, 'categories', MAX_WORDS_CATEGORY, MIN_WORDS_CATEGORY)

    input_data['tok_lem_categories'] = input_data['tok_lem_categories'].apply(keep_words_from_model)
    input_data['tok_lem_desc'] = input_data['tok_lem_desc'].apply(keep_words_from_model)

    return input_data


COLS_TO_RETURN = ['title_pod', 'image', 'description_pod', 'description_ep',
                  'author', 'title_ep', 'audio', 'audio_length', 'pub_date', 'weighted_similarity']


def get_k_similar_podcasts(data, query_pod, k=5):
    query_pod = query_pod.iloc[0]
    data['similarity_category'] = data['tok_lem_categories'].apply(calculate_similarity,
                                                                   args=(query_pod['tok_lem_categories'],))

    data['similarity_desc'] = data['tok_lem_desc'].apply(calculate_similarity,
                                                         args=(query_pod['tok_lem_desc'],))
    data['weighted_similarity'] = (data['similarity_category'] * 0.3 + data['similarity_desc'] * 0.7) / 2

    return data[COLS_TO_RETURN].nlargest(50, columns=['weighted_similarity']).sample(k).reset_index()


@app.route('/roadcast', methods=['POST'])
def recommendation():
    if request.method == 'POST':  # and request.is_json:
        print('if')

        data = flask.request.get_json()

        time_range = data['time']
        time_max = time_range[1]
        time_min = time_range[0]
        rec_number = data['batch_size']
        data = pd.DataFrame(data['data'])

        cleaned_data = clean_input_data(data)

        sub_df = df[(df['audio_length'] < time_max) & (df['audio_length'] > time_min)]

        return_data = get_k_similar_podcasts(sub_df, cleaned_data, k=rec_number)
        return_data = return_data.to_json()

    else:
        return 'got into else'

        data = 'incorrect'

    response_body = {
        'message': 'JSON received',
        'recommendations': return_data
    }
    res = flask.make_response(flask.jsonify(response_body), 200)

    return res


if __name__ == '__main__':
    if LOCAL_RUN:
        app.run(debug=True)
    else:
        app.run(host='0.0.0.0', port=AWS_PORT)
