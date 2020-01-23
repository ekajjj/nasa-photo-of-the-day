import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
import styled, { css } from "styled-components";

export default function PhotoList() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=R7rXQduQXMbly7tVWcI1m6TCEBJ1CdObnzh06jZ7`
      )
      .then(response => {
        setPhotos(response.data);
      })
      .catch(err => {
        console.log("Could not find the photo", err);
      });
  }, []);
  console.log(photos);

  return (
    <div className="photo-pics">
      <PhotoCard
        key={photos.key}
        copyright={photos.copyright}
        date={photos.date}
        explanation={photos.explanation}
        image={photos.url}
      />
    </div>
  );
}