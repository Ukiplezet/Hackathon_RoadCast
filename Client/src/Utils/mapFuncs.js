import * as tt from "@tomtom-international/web-sdk-maps";

export const convertToPoints = (lngLat) => {
  return {
    point: {
      latitude: lngLat.lat,
      longitude: lngLat.lng,
    },
  };
};

export const drawRoute = (geoJson, map) => {
  if (map.getLayer("route")) {
    map.removeLayer("route");
    map.removeSource("route");
  }
  map.addLayer({
    id: "route",
    type: "line",
    source: {
      type: "geojson",
      data: geoJson,
    },
    paint: {
      "line-color": "#F28830",
      "line-width": 6,
    },
  });
};

export const addDestination = (lngLat, map) => {
  const stop = document.createElement("div");
  stop.className = "destination";

  new tt.Marker({ element: stop }).setLngLat(lngLat).addTo(map);
};
