import React, { useState } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

import styles from "./MapChart.module.css";

export const MapChart = ({ setTooltipContent, covidCases, setCountryToShow }) => {

  const [newCountry, setNewCountry] = useState([])

  const getCountry = (countryName) => {
    const country = Object.values(covidCases).find(cn => cn.All.country === countryName)
    console.log(country)

    if (country) {
      const arrayInfo = new Array(country.All.confirmed, country.All.confirmed, country.All.population, country.All.abbreviation);
      console.log(arrayInfo)
      return arrayInfo
    } else {
      return 'No data'
    }
  }

  return (
    <>
      <ComposableMap data-tip="">
        <ZoomableGroup>
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    //setTooltipContent(`${getCountry(geo.properties.name)}`);
                    setTooltipContent(`${geo.properties.name}`);
                    setCountryToShow(`${getCountry(geo.properties.name)}`)
                    //setTooltipContent(`${geo.properties.name, getCountry(geo.properties.name)}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
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
