import React from "react";
import "./App.css";
import axios from "axios";
import Navigation from "./Components/Navigation/Navigation";
import Landing from "./Components/Landing/Landing";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
