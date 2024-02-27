// ImageCard.js

import React from "react";
import "./ImageCard.css";

const ImageCard = ({ city, image }) => {
  return (
    <div className="card">
      <img src={image} alt={city.name} className="city-image" />
      <div className="city-info">
        <h2>{city.name}</h2>
        <div className="population-info">
          <div>
            <p>Male Population: {city.male_ratio}</p>
            <p>Female Population: {city.female_ratio}</p>
          </div>
        </div>
        <p>Total Population: {city.population}</p>
        <p>State: {city.state}</p>
      </div>
    </div>
  );
};

export default ImageCard;
