import React, { useEffect, useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Col } from "react-bootstrap";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import SnackbarContent from "@mui/material/SnackbarContent";
import OnHoverScrollContainer from "../Components/CostumScrollBar/CostumScrollDiv";
import * as tt from "@tomtom-international/web-sdk-maps";
import * as ttapi from "@tomtom-international/web-sdk-services";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import { convertToPoints, drawRoute, addDestination, markSearchedField } from "../Utils/mapFuncs";
import GpsArrow from "../media/gps-arrow-orange.png"
import { MapContext } from "../Context/MapContext"

function Map() {
  const mapEl = useRef()
  const history = useHistory()
  const { routeInfo, setRouteInfo } = useContext(MapContext)
  
  const [map, setMap] = useState({})
  const [currentLocationMsg, setCurrentLocationMsg] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  
  const [latitude, setLatitude] = useState(32.052797);
  const [longitude, setLongitude] = useState(34.772238);

  const handleSearchPopUpClose = () => { setAnchorEl(null) };
  const searchPopUpOpen = Boolean(anchorEl);

  useEffect(() => {
      navigator.geolocation.watchPosition((position) => {
          setCurrentLocationMsg(`Current location accurate to ${position.coords.accuracy}metres`)
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude);
        }, (error) => {
          setCurrentLocationMsg("To find current location, turn on location in settings")
      })
  }, [])

  useEffect(() => {
    const origin = { lng: longitude, lat: latitude };
    const destinations = [];

    let tomtomMap = tt.map({
      key: process.env.REACT_APP_TOMTOM_API_KEY,
      container: mapEl.current,
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true,
      },
      center: [longitude, latitude],
      zoom: 15,
    });
    setMap(tomtomMap);

    const addMarker = () => {
      const pin = document.createElement("div");
      pin.innerHTML = `<img src=${GpsArrow} height="20px" width="25px"/>`;
      pin.className = "locationMarker";

      const marker = new tt.Marker({
        draggable: true,
        element: pin,
      })
        .setLngLat([longitude, latitude])
        .addTo(tomtomMap);

      marker.on("dragend", () => {
        const lngLat = marker.getLngLat();
        setLongitude(lngLat.lng);
        setLatitude(lngLat.lat);
      })
    }
    addMarker()

    const sortDestinations = (locations) => {
      const destinationPoints = locations.map((destination) => {
        return convertToPoints(destination);
      });

      const callParams = {
        key: process.env.REACT_APP_TOMTOM_API_KEY,
        destinations: destinationPoints,
        origins: [convertToPoints(origin)],
      };

      return new Promise((resolve, reject) => {
        ttapi.services.matrixRouting(callParams).then((matrixAPIResults) => {
          const results = matrixAPIResults.matrix[0];
          const resultsArr = results.map((result, index) => {
            return {
              location: locations[index],
              drivingTime: result.response.routeSummary.travelTimeInSeconds,
            };
          });
          resultsArr.sort((a, b) => a.drivingTime - b.drivingTime );
          const sortedLocations = resultsArr.map((result) => result.location );
          resolve(sortedLocations);
        });
      });
    };

    const recalculateRoutes = () => {
      sortDestinations(destinations).then((sorted) => {
        sorted.unshift(origin);
        ttapi.services
          .calculateRoute({
            key: process.env.REACT_APP_TOMTOM_API_KEY,
            locations: sorted,
          })
          .then((routeData) => {
            setRouteInfo(routeData.routes[0].summary);
            const geoJson = routeData.toGeoJson();
            drawRoute(geoJson, tomtomMap);
          });
      });
    };

    tomtomMap.on("click", (e) => {
      destinations.push(e.lngLat);
      addDestination(e.lngLat, tomtomMap);
      recalculateRoutes();
    });

    return () => tomtomMap.remove();
  }, [longitude, latitude]);

  const search = (event) => {
    setAnchorEl(event.currentTarget);
    ttapi.services.fuzzySearch({
      key: process.env.REACT_APP_TOMTOM_API_KEY,
      query: searchInput,
      boundingBox: map.getBounds()
    }).then(results => {
      if (results.results.length === 0) {
        console.log("No results")
      } else {
        setSearchResults(results.results)
      }
    }).catch(err => {
      console.log(err)
    })
  }

  const handleSearchClick = (result) => {
    map.flyTo({ center: result.position, zoom: 14 });
    markSearchedField(result.position, map);
  }

  const goFindPodcasts = (event) => {
    // Fix bug: routeInfo won't disable btn when you return to map page even tho route has disappeared
    event.preventDefault()
    history.push("/:loggedId");
  }

  return (
    <Col
      className="map-container shadow-lg pt-2 text-white"
      xs={10}
      md={8}
      lg={7}
    >
      <OnHoverScrollContainer>
        <div>
          <Box sx={{ display: "flex", alignItems: "center"}}>
            <TextField type="search" id="query" className="mapSearch" value={searchInput} onChange={e => { setSearchInput(e.target.value) }} />
            <Button onClick={search}>Search</Button>
            <SnackbarContent message={currentLocationMsg} className="mapSnackBar"/>
          </Box>
          <div className="d-flex justify-content-center">
            {searchResults && 
              <Popover
                  open={searchPopUpOpen}
                  anchorEl={anchorEl}
                  onClose={handleSearchPopUpClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  // transformOrigin={{
                  //   vertical: 'top',
                  //   horizontal: 'left',
                  // }}
                >
                <List className="mapSearchList">
                  {searchResults.map(result => (
                    <ListItemButton key={result.id} name={result} onClick={() => handleSearchClick(result)}>
                      <ListItemText primary={result.poi.name}/>
                    </ListItemButton>
                  ))}
                </List>
              </Popover>
            }
          </div>
        </div>
        {map && <>
            <div ref={mapEl} className="map" />
            <div className="mapBtn">
              <Button
                variant="contained"
                disabled={routeInfo.travelTimeInSeconds ? false : true}
                onClick={goFindPodcasts}
              >Go</Button>
            </div>
          </>}
      </OnHoverScrollContainer>
    </Col>
  );
}

export default Map;
// const popUpOffset = { bottom: [0, -25] }
// const popUp = new tt.Popup({ offset: popUpOffset }).setHTML(<div style={{ color: "black"}}>"This is you!"</div>)
// marker.setPopup(popUp).togglePopup()
