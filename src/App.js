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
      route: 'home',
      isSignedIn: false,
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

  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState({isSignedIn: false});
    } else if(route === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  render() {
    return (
      <div className="App">
      <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
      { this.state.route === 'home'
       ? 
        <div>
          <Logo />
          <Rank />
          <ImageLinkForm inputChange={this.onInputChange} buttonSubmit={this.onButtonSubmit}/>
          <FaceRecognition image={this.state.imageUrl} box={this.state.box}/>
        </div>
       :(
        this.state.route !== 'register' 
         ?
         <Signin onRouteChange={this.onRouteChange} />
         :
        <Register onRouteChange={this.onRouteChange} />
       )
    }
      </div>
    );
  }
}

export default App;
