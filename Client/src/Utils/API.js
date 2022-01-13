import axios from "axios";

const BASE_URL = "http://localhost:5500";

export default {
  getUserById: async (userId) => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${BASE_URL}/user/${userId}`, {
      userId,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    return response.data;
  },

  updateUserData: async ({
    firstName,
    lastName,
    email,
    password,
    bio,
    phoneNumber,
    userId,
  }) => {
    const token = localStorage.getItem("token");
    const response = await axios.put(
      `${BASE_URL}/user/${userId}`,
      {
        firstName,
        lastName,
        email,
        password,
        bio,
        phoneNumber,
        token,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },

  loginUser: async ({ email, password }) => {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    return response.data;
  },

  signUpUser: async ({ firstName, lastName, email, password, phoneNumber }) => {
    const response = await axios.post(`${BASE_URL}/signup`, {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    });
    return response.data;
  },

  findPodcastBasedOnSearchForm: async (data) => {
    const userId = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    const response = await axios.post(
      `${BASE_URL}/search/${userId}`,
      {
        userId,
        data,
        token,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    return response.data;
  },
  findPodcastBasedOnUserPref: async (data) => {
    const userId = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    const podcastData = {
      id: "f13d8c2343e748858464167b426fe67b",
      rss: "https://supercarlinbrothers.libsyn.com/rss",
      link: "https://supercarlinbrothers.libsyn.com/star-wars-theory-the-white-saber-theory?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
      audio:
        "https://www.listennotes.com/e/p/f13d8c2343e748858464167b426fe67b/",
      image:
        "https://cdn-images-1.listennotes.com/podcasts/super-carlin-brothers-j-and-ben-carlin-RyWtwTvoiCe-BodDr7iIAR3.1400x1400.jpg",
      podcast: {
        id: "8bdbb906eef04e5d8b391e947998e9af",
        image:
          "https://cdn-images-1.listennotes.com/podcasts/super-carlin-brothers-j-and-ben-carlin-RyWtwTvoiCe-BodDr7iIAR3.1400x1400.jpg",
        genre_ids: [68, 214, 265, 99],
        thumbnail:
          "https://cdn-images-1.listennotes.com/podcasts/super-carlin-brothers-j-and-ben-carlin-HVRX5onYNcG-BodDr7iIAR3.300x300.jpg",
        listen_score: null,
        title_original: "Super Carlin Brothers",
        listennotes_url:
          "https://www.listennotes.com/c/8bdbb906eef04e5d8b391e947998e9af/",
        title_highlighted: "Super Carlin Brothers",
        publisher_original: "J and Ben Carlin",
        publisher_highlighted: "J and Ben Carlin",
        listen_score_global_rank: null,
      },
      itunes_id: 1479112798,
      thumbnail:
        "https://cdn-images-1.listennotes.com/podcasts/super-carlin-brothers-j-and-ben-carlin-HVRX5onYNcG-BodDr7iIAR3.300x300.jpg",
      pub_date_ms: 1576602000082,
      title_original: "Star Wars Theory: The White Saber Theory",
      listennotes_url:
        "https://www.listennotes.com/e/f13d8c2343e748858464167b426fe67b/",
      audio_length_sec: 763,
      explicit_content: false,
    };
    const response = await axios.post(
      `${BASE_URL}/search/similar/${userId}`,
      {
        userId,
        podcastData,
        token,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    return response.data;
  },
};
