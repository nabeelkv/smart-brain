import React from "react";

const FaceRecognition = ({image}) => {
  const defaultImage = "https://www.clarifai.com/hubfs/model-gallery/model-gallery-face-detection-featured.png";
  return (
    <div className="center ma">
      <div className="absolute mt2">
      <img alt="ouput" src={image==='' ? defaultImage : image} width='500px' height='auto'/>
      </div>
    </div>
  );
}

export default FaceRecognition;