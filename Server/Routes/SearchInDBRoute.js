require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");
const BASE_URL = `https://listen-api-test.listennotes.com/api/v2`;

const { getUserFromDBById } = require("../Controllers/UsersController");
const verifyToken = require("../Middleware/auth");

// post -> /search/:id
// 1. based on ride form
router.post("/:id", verifyToken, async (req, res) => {
  console.log(req.body);
  const { podcastCategory, podcastName } = req.body.data;
  if (podcastName === "") {
    try {
      const response = await axios.get(
        `${BASE_URL}/search?q=${podcastCategory}`
      );
      console.log(response.data.results);
      return res.status(200).send(response.data);
    } catch (err) {
      return err;
    }
  } else {
    try {
      const response = await axios.get(`${BASE_URL}/search?q=${podcastName}`);
      return res.status(200).send(response.data);
    } catch (err) {
      return err;
    }
  }
});

const BASE_URL_DS = `http://ec2-3-66-174-245.eu-central-1.compute.amazonaws.com:8080/roadcast`;
// get -> /search/similar/:id
// 2. for savedpodcast list
router.post("similar/:id", verifyToken, async (req, res) => {
  const data = {data: [{description_ep: req.body.description_ep, description_pod: req.body.description_pod, categories: req.body.categories}], time:[req.body.min, req.body.max], batch_size: req.body.batch_size}
  //- description_ep
  //-description_pod
  //- categories;
  //time: [min, max]
  //batch_size: int;
  try {
    const response = await axios.post(
      `${BASE_URL_DS}/podcasts/${savedPodcasts[i]}`
    );
    // put the obejct from response in an object
    return res.status(200).send(response.data);
  } catch (err) {
    return err;
  }
})
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
