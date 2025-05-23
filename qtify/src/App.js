import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section"; // Adjust the path as necessary


function App() {


  return (
    <div>
      <header>
        <Navbar />
        <Hero />
      </header>

      <main>


            <Section   endpoint={"https://qtify-backend-labs.crio.do/albums/top"} sectionType={"Top Albums"} />
            <Section   endpoint={"https://qtify-backend-labs.crio.do/albums/new"} sectionType={"New Albums"} />


      </main>

      <footer>
        {/* Add your footer content here */}
        <p>Footer content goes here</p>
      </footer>
    </div>
  );
}

export default App;
