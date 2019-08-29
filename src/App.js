import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navigation from "./Components/Navigation/Navigation";
import Landing from "./Components/Landing/Landing";
import Footer from "./Components/Footer/Footer";

function App() {
  // logic here from useEffect using axios to obtain the nasa information
  const [data, setData] = useState({});
  
  
    
    useEffect(() => {
      const fetchData = () => {
        axios
          .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")  
          .then(res => setData(res.data))
          
      }
        fetchData();
        
    }, []);

  return (
    <div className="App">
      <Navigation />
      <Landing
          data={data}
       />
      <Footer />
    </div>
  );
}

export default App;
