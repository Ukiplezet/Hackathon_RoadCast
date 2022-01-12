require("dotenv").config();
const express = require("express");
const router = express.Router();

const BASE_URL = `https://listen-api-test.listennotes.com/api/v2`;

const { getUserFromDBById } = require("../Controllers/UsersController");

// get -> /search/:id
// 1. based on ride form
router.get("/:id", async (req, res) => {
  try {
    const { rideLength, topic } = req.body;
    const response = await axios.get(
      `${BASE_URL}/search?q=${topic}&max_len=${rideLength}`
    );
    return res.status(200).send(response.data);
  } catch (err) {
    return err;
  }
});

// get -> /search/saved/:id
// 2. for savedpodcast list
router.get("/:id", async (req, res) => {
  //go to mongo getUserById
  const userId = req.params.id;
  const response = await getUserFromDBById(userId);
  response.savedpodcasts = [];
  try {
    for (i = 0; i < response.savedpodcasts.length; i++) {
      const response = await axios.get(
        `${BASE_URL}/podcasts/${savedPodcasts[i]}`
      );
      // put the obejct from response in an object
    }
    return res.status(200).send(response.data);
  } catch (err) {
    return err;
  }
});

// get->/search/discover/:id
//3. for discover page

//3.1 first search is trending
router.get("/:id", async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/trending_searches`);
    return res.status(200).send(response.data);
  } catch (err) {
    return err;
  }
});

//3.2 second search based on the user's last searches(profile)
router.get("/:id", async (req, res) => {
  try {
    //a. getting user's frequent searchs (DS-guys)
    //b.query the search
    const response = await axios.get(`${BASE_URL}/search?q=${topic}`);
    return res.status(200).send(response.data);
  } catch (err) {
    return err;
  }
});
