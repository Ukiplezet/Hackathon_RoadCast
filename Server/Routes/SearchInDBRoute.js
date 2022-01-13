require("dotenv").config();
const express = require("express");
const router = express.Router();

const BASE_URL = `https://listen-api-test.listennotes.com/api/v2`;

const { getUserFromDBById } = require("../Controllers/UsersController");
const verifyToken = require("../Middleware/auth");

// post -> /search/:id
// 1. based on ride form
router.post("/:id", verifyToken, async (req, res) => {
  const { podcastCategory, podcastName } = req.body.data;
  if (podcastName === "") {
    try {
      const response = await axios.get(
        `${BASE_URL}/search?q=${podcastCategory}`,
        {
          headers: {
            "X-ListenAPI-Key": a382e1635f0340a7892a7b19aa42c8ca,
          },
        }
      );
      console.log(response);
      // return res.status(200).send(response.data);
    } catch (err) {
      return err;
    }
  } else {
    try {
      const response = await axios.get(`${BASE_URL}/search?q=${podcastName}`, {
        headers: {
          "X-ListenAPI-Key": a382e1635f0340a7892a7b19aa42c8ca,
        },
      });
      console.log(response);
      return res.status(200).send(response.data);
    } catch (err) {
      return err;
    }
    return res.status(200).send(response.data);
  }
});

// get -> /search/saved/:id
// 2. for savedpodcast list
router.get("saved/:id", verifyToken, async (req, res) => {
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
router.get("/discover/:id/trending", verifyToken, async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/trending_searches`);
    return res.status(200).send(response.data);
  } catch (err) {
    return err;
  }
});

//3.2 second search based on the user's last searches(profile)
router.get("/discover/:id/userpreference", verifyToken, async (req, res) => {
  try {
    //a. getting user's frequent searchs (DS-guys)
    //b.query the search
    const response = await axios.get(`${BASE_URL}/search?q=${topic}`);
    return res.status(200).send(response.data);
  } catch (err) {
    return err;
  }
});

module.exports = router;
