import React, { useState, useEffect, useContext } from "react";
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
import { MapContext } from "../../Context/MapContext";
import RowPost from "../NetFlixSlider/RowPost";
import { MenuProps, podcastOptions} from "./SearchFormStyles"

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
  const { routeInfo } = useContext(MapContext);
  console.log(routeInfo);
  const [request, setRequest] = useState(false);
  const [podcastCategory, setPodcastCategory] = useState([]);
  const [podcastName, setPodcastName] = useState([]);
  const [listOfPodcasts, setListOfPodcasts] = useState([]);
<<<<<<< HEAD
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
=======
>>>>>>> 025bbb6c9f6207db4a889249320d96b1e1a55311

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

<<<<<<< HEAD
  const transportationOnChange = (event) => {
    setTransportation(event.target.value);
    console.log(event.target.value);
  };

=======
  // // probably will need to change the endpoint later
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5500/podcasts", {
  //       headers: {
  //         accessToken: localStorage.getItem("accessToken"),
  //       },
  //     })
  //     .then((response) => {
  //       setListOfPodcasts(response.data);
  //       console.log(response.data);
  //     });
  // }, []);

  // not sure setRequest is the right choice here
>>>>>>> 025bbb6c9f6207db4a889249320d96b1e1a55311
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("travelDuration", routeInfo.travelTimeInSeconds);
    formData.append("distanceInMeters", routeInfo.lengthInMeters);
    formData.append("arrivalTime", routeInfo.arrivalTime);
    formData.append("departureTime", routeInfo.departureTime);
    formData.append("podcastCategory", podcastCategory);
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
            padding: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: 800,
            height: 280,
            borderRadius: "2%",
            marginTop: "2rem",
            marginLeft: "2rem",
          }}
        >
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
    </>
  );
}
