import React, { useState, useEffect } from "react";
import axios from "axios";

const Landing = () => {
    // logic here from useEffect using axios to obtain the nasa information
    const [data, setData] = useState({hits: []});
    
    useEffect(() => {
        const fetchData = () => {
            axios
        }
    })

    return (
        <section>
            <h1>Title</h1>
            <img src="#" alt="photo"/>
            <p>Description</p>
        </section>
    );
};

export default Landing;