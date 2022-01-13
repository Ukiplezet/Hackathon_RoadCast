import React, { useState, useEffect } from "react";
import "./SearchForm";
import api from "../../Utils/API";
import { Button, Container } from "react-bootstrap";
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
import { scroller } from "react-scroll";
import PodcastCard from "../PodcastData/PodcastCard";
import RowPost from "../NetFlixSlider/RowPost";
// {
//   FormData: {
//       startingPoint: "hadera",
//       destination: "tel aviv",
//       podcastCategory: ["politics", "health", "enviroment"],
//       podcastName: "Omri Sucks bad", //(OPTIONAL)
//       transportation: "bus",
//   }
// }

export default function SearchForm(props) {
  const [request, setRequest] = useState(false);
  const [startingPoint, setStartingPoint] = useState("");
  const [destination, setDestination] = useState("");
  const [podcastCategory, setPodcastCategory] = useState([]);
  const [podcastName, setPodcastName] = useState([]);
  const [transportation, setTransportation] = useState("Car");
  const [listOfPodcasts, setListOfPodcasts] = useState([]);
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
    "Politics",
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

  const startingPointOnChange = (event) => {
    setStartingPoint(event.target.value);
    console.log(event.target.value);
  };

  const destinationOnChange = (event) => {
    setDestination(event.target.value);
    console.log(event.target.value);
  };

  const podcastCategoryOnChange = (event) => {
    const {
      target: { value },
    } = event;
    setPodcastCategory(typeof value === "string" ? value.split(",") : value);
    console.log(event.target.value);
  };

  const podcastNameOnChange = (event) => {
    setPodcastName(event.target.value);
    console.log(event.target.value);
  };

  const transportationOnChange = (event) => {
    setTransportation(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("startingPoint", startingPoint);
    formData.append("destination", destination);
    formData.append("podcastCategory", podcastCategory);
    formData.append("transportation", transportation);
    formData.append("podcastName", podcastName);
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    props.handleSearchRequest(data);
  };

  const scrollToPodcastList = () => {
    scroller.scrollTo("podcastCategory", {
      smooth: true,
      duration: 700,
    });
  };

  return (
    <>
      <Container className="SearchFormBox d-flex justify-content-center mb-2 pe-5">
        <Card
          className="SearchFormBox searchPaper"
          elevation={3}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: 800,
            height: 600,
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
            Choose category
          </InputLabel>
          <Select
            style={{ width: "20rem" }}
            labelId="demo-multiple-name-label"
            id="podcastCategory"
            multiple
            value={podcastCategory}
            onChange={podcastCategoryOnChange}
            input={<OutlinedInput label="Podcast" />}
            MenuProps={MenuProps}
          >
            {podcastOptions.map((podcastCategory) => (
              <MenuItem key={podcastCategory} value={podcastCategory}>
                {podcastCategory}
              </MenuItem>
            ))}
          </Select>
          <InputLabel className="searchForm" id="demo-simple-select-label">
            Enter the name of a podcast (optional)
          </InputLabel>
          <TextField
            style={{ width: "20rem" }}
            className=""
            id="podcastName"
            label="Podcast Name"
            value={podcastName}
            onChange={podcastNameOnChange}
          />
          <Button
            variant="success"
            className="searchButton"
            // onClick={onSubmit}
            onClick={(e) => {
              handleSubmit(e);
              scrollToPodcastList();
              props.showSearchFormHandler();
              props.displaySearchResultsHandler();
            }}
            method="POST"
          >
            Find me a podcast
          </Button>
        </Card>
      </Container>
      {/* {/* <RowPost
        className="my-5 pb-5"
        title="Here are your podcasts of interest:"
        isSmall={false}
        resultsObject={resultsObject}
        setResultsObject={setResultsObject} */}
      {/* // id={element.id}
      // podcastCategory={element.podcast.genre_ids}
      // podcastName={element.title_original}
      // picture={element.podcast.thumbnail}
      // podcastDescription={element.description_original}
      // episodeDescription={element.episodeDescription}
      // date={element.pub_date_ms}
      // length={element.audio_length_sec}
      // rating={element.rating}
      // audio={element.autio} */}
      {/* /> */}
    </>
  );
}
