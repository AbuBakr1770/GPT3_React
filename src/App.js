import React from "react";

// import compoenets & containers form index
import {
  BlogCC,
  FeaturesCC,
  FooterCC,
  HeaderCC,
  PossibilityCC,
  WhatGPT3CC,
} from "./containers/index";

// Import components from component index
import { CTA, Brand, NavBar } from "./components/";

import './App.css'

const App = () => {
  return (
    <>
      <div className="App">
        <div className="gradient__bg">
          <NavBar/>
          <HeaderCC/>
        </div>

        <Brand/>
        <WhatGPT3CC/>
        <FeaturesCC/>
        <PossibilityCC/>
        <CTA/>
        <BlogCC/>
        <FooterCC/>
      </div>
    </>
  );
};

export default App;
