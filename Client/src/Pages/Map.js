import React, { useEffect, useState, useRef } from "react";
import { Col } from "react-bootstrap";
import OnHoverScrollContainer from "../Components/CostumScrollBar/CostumScrollDiv";
import * as tt from "@tomtom-international/web-sdk-maps";
import * as ttapi from "@tomtom-international/web-sdk-services";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import { convertToPoints, drawRoute, addDestination } from "../Utils/mapFuncs";
import GpsArrow from "../media/gps-arrow-orange.png";

function Map() {
  const mapEl = useRef();
  const [map, setMap] = useState({});
  const [routeInfo, setRouteInfo] = useState({});
  const [latitude, setLatitude] = useState(32.052797); // set to current location
  const [longitude, setLongitude] = useState(34.772238);

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
      // const popUpOffset = { bottom: [0, -25] }
      // const popUp = new tt.Popup({ offset: popUpOffset }).setHTML(<div style={{ color: "black"}}>"This is you!"</div>)

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
      });

      // marker.setPopup(popUp).togglePopup()
    };
    addMarker();

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
          resultsArr.sort((a, b) => {
            return a.drivingTime - b.drivingTime;
          });
          const sortedLocations = resultsArr.map((result) => {
            return result.location;
          });
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

  return (
    <Col
      className="map-container center-content shadow-lg pt-2 text-white"
      xs={10}
      md={8}
      lg={7}
    >
      <OnHoverScrollContainer>
        <Col>Where to?</Col>

        {map && (
          <>
            {/* <Col className="search-bar">
            <input
              type="text"
              id="latitude"
              className="latitude"
              placeholder="latitude"
              onChange={(e) => { setLatitude(e.target.value) }}
            />
            <input
              type="text"
              id="longitude"
              className="longitude"
              placeholder="longitude"
              onChange={(e) => { setLongitude(e.target.value) }}
            />
          </Col> */}
            <div ref={mapEl} className="map" />
          </>
        )}
      </OnHoverScrollContainer>
    </Col>
  );
}

export default Map;
