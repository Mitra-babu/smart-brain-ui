import React, { Component } from "react";
import "./App.css";
import ParticlesBg from "particles-bg";

import Navigation from "./component/Nagivation/Nagivation";
import Logo from "./component/Logo/Logo";
import Rank from "./component/Rank/Rank";
import ImageLinkForm from "./component/ImageLinkForm/ImageLinkForm";

function App() {
  return (
    <div className="App">
      <ParticlesBg className="particles" type="cobweb" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
