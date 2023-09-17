import React, { Component } from "react";
import "./App.css";
import ParticlesBg from "particles-bg";

import Navigation from "./component/Nagivation/Nagivation";
import Logo from "./component/Logo/Logo";
import Rank from "./component/Rank/Rank";
import ImageLinkForm from "./component/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./component/FaceRecognition/FaceRecognition";

const returnClarifaiRequest = (imageURL) => {
  const PAT = "YOUR_PAT";
  const USER_ID = "YOUR_USER_ID";
  const APP_ID = "Face-smart-brain";
  const IMAGE_URL = imageURL;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };
  return requestOptions;
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: " ",
      imageURL: " ",
    };
  }
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageURL: this.state.input });
    const MODEL_ID = "face-detection";
    const MODEL_VERSION_ID = "YOUR_MODEL_VERSION";
    fetch(
      "https://api.clarifai.com/v2/models/" +
        MODEL_ID +
        "/versions/" +
        MODEL_VERSION_ID +
        "/outputs",
      returnClarifaiRequest(this.state.input)
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <div className="App">
        <ParticlesBg className="particles" type="cobweb" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageURL={this.state.imageURL} />
      </div>
    );
  }
}

export default App;
