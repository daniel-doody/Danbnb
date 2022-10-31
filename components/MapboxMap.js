import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Map from "react-map-gl";
import getCenter from "geolib/es/getCenter";

const MapboxMap = ({ bnbArray }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  // transform the bnbArray into the latitude/longitude array required for getCenter:
  // used a direct return ... placed the curly braces inside parentheses, to return an array of objects.
  const coordinates = bnbArray.map((item) => ({
    longitude: item.long,
    latitude: item.lat,
  }));
  // console.log(coordinates);

  // use getCenter function to get the average Long/Lat to find center for map:
  const center = getCenter(coordinates);
  // returns an object with 2 keys: longitude/latitude

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  //

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/danieldoody/cl9t67ppr000v14nyjh8e7bx9"
      mapboxAccessToken={process.env.mapbox_token}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {bnbArray.map((item) => (
        <div key={item.long}>
          <Marker
            longitude={item.long}
            latitude={item.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <a
              onclick={() => setSelectedLocation(item)}
              className="text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </a>
          </Marker>

          {/* The popup that should show when Pin is clicked: */}
          {selectedLocation === item.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={item.lat}
              longitude={item.long}
            >
              {item.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default MapboxMap;
