import React from "react";

const FaceRecognition = ({image}) => {
  // const defaultImage = "https://www.clarifai.com/hubfs/model-gallery/model-gallery-face-detection-featured.png";
  return (
    <div className="center ma">
      <div className="absolute mt2">
      <img src={image} width='500px'/>
      </div>
    </div>
  );
}

export default FaceRecognition;