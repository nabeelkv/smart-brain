import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import Signin from './Signin/Signin';
import Register from './Register/Register';

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin'
    }
  }
  
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('input-image');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    // Clarifi API Request
      fetch('https://nabeelkv.github.io/jsonplaceholder/face-detection')
      .then(response => response.json())
      .then(users => this.displayFaceBox(this.calculateFaceLocation(users)))
      .catch(err => console.log(err));
  }

  onRouteChange = () => {
    this.setState({route: 'home'});
  }

  render() {
    return (
      <div className="App">
      <Navigation />
      { this.state.route === 'signin'
       ? 
        <Signin onRouteChange={this.onRouteChange} />
       :
        <div>
          <Logo />
          <Rank />
          <ImageLinkForm inputChange={this.onInputChange} buttonSubmit={this.onButtonSubmit}/>
          <FaceRecognition image={this.state.imageUrl} box={this.state.box}/>
        </div>
    }
      </div>
    );
  }
}

export default App;
