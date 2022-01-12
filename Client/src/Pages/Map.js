import React, { useEffect, useState, useRef } from "react";
import OnHoverScrollContainer from "../Components/CostumScrollBar/CostumScrollDiv";
import tt from "@tomtom-international/web-sdk-maps";
import * as ttapi from "@tomtom-international/web-sdk-services";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import { Card, Col, Container } from "react-bootstrap";
// import { FaLocationArrow } from "react-icons/fa";
// <HiLocationMarker />;

function Map() {
  const API_KEY = "hAVhyF48FrhhYeWA6HoGG7AORll1v9gU"
  const mapEl = useRef(null)
  // const markerEl = useRef(null);
  const [map, setMap] = useState({})
  const [latitude, setLatitude] = useState(-26.195737);
  const [longitude, setLongitude] = useState(28.08032);

  useEffect(() => {
    let tomtomMap = tt.map({
        key: API_KEY,
        container: mapEl.current,
        stylesVisibility: {
          trafficIncidents: true,
          trafficFlow: true
        },
        center: [longitude, latitude],
        zoom: 14
    });
    setMap(tomtomMap);

    const addMarker = () => {
      // const popUpOffset = { bottom: [0, -25] }
      // const popUp = new tt.Popup({ offset: popUpOffset }).setHTML("This is you!")

      const pin = document.createElement("div")
      pin.className = "locationMarker";
      // pin.textContent = <FaLocationArrow />

      const marker = new tt.Marker({
        draggable: true,
        element: pin,
      })
      .setLngLat([longitude, latitude])
      .addTo(tomtomMap)

      marker.on("dragend", () => {
        const newlnglat = marker.getLngLat()
        setLongitude(newlnglat.lng)
        setLatitude(newlnglat.lat);
      })
      // marker.setPopup(popUp).togglePopup()
    }
    addMarker()

    return () => tomtomMap.remove();

  }, [longitude, latitude])

  return (
    <Col
      className="map-container center-content shadow-lg pt-2 text-white"
      xs={10}
      md={8}
      lg={7}
    >
      <OnHoverScrollContainer>
        <Col>Where to?</Col>
        
        {map && <>
          <Col className="search-bar">
            <input
              type="number"
              id="latitude"
              className="latitude"
              placeholder="latitude"
              onChange={(e) => { setLatitude(e.target.value) }}
            />
            <input
              type="number"
              id="longitude"
              className="longitude"
              placeholder="longitude"
              onChange={(e) => { setLongitude(e.target.value) }}
            />
          </Col>
          <Col ref={mapEl} className="map" />
          {/* <div ref={markerEl} className="marker"></div> */}
        </>}
      </OnHoverScrollContainer>
    </Col>
  );
}

export default Map;
