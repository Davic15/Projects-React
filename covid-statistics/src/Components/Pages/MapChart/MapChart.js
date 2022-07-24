import React from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

export const MapChart = ({ setTooltipContent, covidCases, setCountryToShow }) => {

  const getCountry = (countryName) => {
    const countryAll = Object.values(covidCases).find(cn => cn.All.country === countryName)
    if (countryAll) {
      const arrayInfo = new Array(countryAll.All.confirmed, countryAll.All.deaths, countryAll.All.population, countryAll.All.abbreviation);
      return arrayInfo
    } else {
      return "";
    }
  }

  return (
    <>
      <ComposableMap data-tip="">
        <ZoomableGroup center={[5, 20]} zoom={1.2}>
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.name}`);
                    setCountryToShow(`${getCountry(geo.properties.name)}`)
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                    setCountryToShow("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none",
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};
