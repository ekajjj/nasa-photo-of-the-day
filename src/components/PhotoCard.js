import React from "react";
import styled, { css } from "styled-components";

const StyledParagraph = styled.p`
  border-style: double;
  max-width: 50%;
  margin: 0 auto;
  margin-bottom: 15px;
  color: white;
`;

const PhotoCard = props => {
  return (
    <div className="photo-list">
      <h1>{props.key}</h1>
      <p className="copy">{props.copyright}</p>
      <p className="date">{props.date}</p>
      <StyledParagraph className="description">
        {props.explanation}
      </StyledParagraph>
      <img src={props.image} alt="#"></img>
    </div>
  );
};
export default PhotoCard;