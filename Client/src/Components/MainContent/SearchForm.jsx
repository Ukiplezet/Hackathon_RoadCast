import React, { useState, useEffect } from "react";
// import "../App.css";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import { scroller } from 'react-scroll';

export default function SearchForm() {
  const [request, setRequest] = useState(false);
  const [startingPoint, setStartingPoint] = useState("");
  const [destination, setDestination] = useState("");
  const [choosePodcast, setChoosePodcast] = useState([]);
  const [transportation, setTransportation] = useState("Car");
  const [listOfPodcasts, setListOfPodcasts] = useState([]);

  const startingPointOnChange = (event) => {
    setStartingPoint(event.target.value);
  };

  const destinationOnChange = (event) => {
    setDestination(event.target.value);
  };

  const podcastOnChange = (event) => {
    const {
      target: { value },
    } = event;
    setChoosePodcast(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const transportationOnChange = (event) => {
    setTransportation(event.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5500/podcasts", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setListOfPodcasts(response.data);
        console.log(response.data);
      });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setRequest(choosePodcast);
  };

  const requestedData = listOfPodcasts.filter(
    (element) => element.choosePodcast === request
  );

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const podcastOptions = [
    "News",
    "Society and Culture",
    "Comedy",
    "Health",
    "Business",
    "Sports",
    "Education",
    "True Crime",
    "History",
    "Technology",
    "Entertainment",
  ];

  return (
    <>
      <Box>
        <Card
          className="searchPaper"
          elevation={3}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: 450,
            height: 500,
            borderRadius: "2%",
            marginTop: "2rem",
            marginLeft: "2rem",
          }}
        >
          <InputLabel className="searchForm" id="demo-simple-select-label">
            Starting point
          </InputLabel>
          <TextField
            style={{ width: "20rem" }}
            className=""
            id="startingPoint"
            label="Starting Point"
            value={startingPoint}
            onChange={startingPointOnChange}
            required
          />
          <InputLabel className="searchForm" id="demo-simple-select-label">
            Choose your destination
          </InputLabel>
          <TextField
            style={{ width: "20rem" }}
            className=""
            id="destination"
            label="Destination"
            value={destination}
            onChange={destinationOnChange}
            required
          />
          <InputLabel className="searchForm" id="demo-simple-select-label">
            How are you getting there?
          </InputLabel>
          <Select
            style={{ width: "8rem" }}
            defaultValue="Car"
            label="Transportation"
            className=""
            id="transportation"
            required
            onChange={transportationOnChange}
          >
            <MenuItem value="Car">Car</MenuItem>
            <MenuItem value="Bus">Bus</MenuItem>
            <MenuItem value="Train">Train</MenuItem>
            <MenuItem value="Bicycle">Bicycle</MenuItem>
            <MenuItem value="Scooter">Scooter</MenuItem>
            <MenuItem value="I'll walk">I'll walk</MenuItem>
          </Select>
          <InputLabel className="searchForm" id="demo-simple-select-label">
            Choose podcasts
          </InputLabel>
          <Select
            style={{ width: "20rem" }}
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={choosePodcast}
            onChange={podcastOnChange}
            input={<OutlinedInput label="Podcast" />}
            MenuProps={MenuProps}
          >
            {podcastOptions.map((choosePodcast) => (
              <MenuItem key={choosePodcast} value={choosePodcast}>
                {choosePodcast}
              </MenuItem>
            ))}
          </Select>
          <Button
            variant="contained"
            className="searchButton"
            onClick={onSubmit}
            method="POST"
          >
            Find me a podcast
          </Button>
        </Card>
      </Box>

      {requestedData.map((element) => {
        return (
          <PodcastCard
            id={element.id}
            podcastName={element.podcastName}
            category={element.category}
            picture={element.picture}
            title={element.title}
            podcastDescription={element.podcastDescription}
            episodeDescription={element.episodeDescription}
            date={element.date}
            length={element.length}
            rating={element.rating}
          />
        );
      })}
    </>
  );
}

// ------------------------------------------------------------------------------------------------

function PodcastCard(props) {
  return (
    <Card className="podcastCard" sx={{ maxWidth: 345, maxHeight: 345 }}>
      <CardContent>
        <img
          src={`http://localhost:5500/${props.picture}`}
          alt={props.title}
          variant="body2"
          color="text.secondary"
        />

        <Typography paragraph color="text.secondary">
          {props.title}
        </Typography>
        <Typography paragraph color="text.secondary">
          {props.podcastName}
        </Typography>
        <Typography paragraph color="text.secondary">
          {props.podcastDescription}
        </Typography>
        <Typography paragraph color="text.secondary">
          {props.category}
        </Typography>
        <Typography paragraph color="text.secondary">
          Episodes
        </Typography>
        <Typography paragraph color="text.secondary">
          {props.date}
        </Typography>
        <Typography paragraph color="text.secondary">
          {props.episodeDescription}
        </Typography>
        <Typography paragraph color="text.secondary">
          {props.rating}
        </Typography>
        <Typography paragraph color="text.secondary">
          {props.length}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Link to={"/listeningnow/" + Number(props.id)}>Play</Link>
        </IconButton>
      </CardActions>
    </Card>
  );
}
