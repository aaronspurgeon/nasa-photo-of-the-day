import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import Navigation from "./Components/Navigation/Navigation";
import Landing from "./Components/Landing/Landing";
import Footer from "./Components/Footer/Footer";

const Wrapper = styled.div`
  width: 1500px;
  margin: 0 auto;
  padding: 2%;
`

function App() {
  // logic here from useEffect using axios to obtain the nasa information
  const [data, setData] = useState({});
  
  
    
    useEffect(() => {
      const fetchData = () => {
        axios
          .get("https://api.nasa.gov/planetary/apod?api_key=VaoiXhmylvz7kP84N4pGXjlN3wDD1Z4gf4yl6hxf")  
          .then(res => setData(res.data))
          
      }
        fetchData();
        
    }, []);

  return (
    <div className="App">
      <Wrapper>
        <Navigation />
        <Landing
            data={data}
        />
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
