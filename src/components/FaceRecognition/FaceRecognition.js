import React from "react";
import './FaceRecognition.css'

const FaceRecognition = ({image, box}) => {
  // const defaultImage = "https://www.clarifai.com/hubfs/model-gallery/model-gallery-face-detection-featured.png";
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
      <img id='input-image' src={image} width='500px' height='auto'/>
      <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  );
}

export default FaceRecognition;