import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div>
      <header>
        <Navbar />
        <Hero/>
      </header>
    </div>
  );
}

export default App;
