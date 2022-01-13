import pandas as pd
import numpy as np
import requests
import json

url = 'http://127.0.0.1:5000/roadcast'

df = pd.read_csv('podcasts_sampled.csv', nrows=5)

samples_id = df.sample(1)

samples_json = samples_id.to_json(orient='records')

samples_json = json.loads(samples_json)

samples_json = {'data': samples_json, 'time': [2000, 3600], 'batch_size': 5}

bulk_url = 'http://127.0.0.1:5000/roadcast'
json_resp = requests.post(bulk_url, json=samples_json).json()['predictions']

print(samples_json)
print('')
print(json_resp)

