import React from "react";
import "./Gallery.css"; // Import CSS file for styling
import ImageCard from "../ImageCard/ImageCard";
import cities from "../../cities"
const Gallery = () => {
  // Dummy image data
console.log(cities,"Image");
const image = "https://imgs.search.brave.com/LPOzi8YSXLrYJ-lF2RGIBZOpc06NXmQYdKwd-KB7BjI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnN0/YWNrLmltZ3VyLmNv/bS9FYTFNSC5qcGc"

  return (
    <div className="gallery">
      {cities.map((city) => (
        <ImageCard city={city} image={image} />
      ))}
    </div>
  );
};

export default Gallery;
