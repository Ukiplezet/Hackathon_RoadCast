import React, { createContext, useState } from "react";

export const MapContext = createContext({
  routeInfo: {},
  setRouteInfo: () => {},
});

const MapProvider = ({ children }) => {
    const [routeInfo, setRouteInfo] = useState({})
    return (
        <MapContext.Provider value={{ routeInfo, setRouteInfo }}>
            {children}
        </MapContext.Provider>
    );
};

export default MapProvider;