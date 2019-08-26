import React, { useState } from "react";

const Landing = (props) => {
    const urlStyle = {
        width: '400px',
        height: '300px'
    }
    
    
    return (
        <section>
            <h1>{props.title}<span>{props.date}</span></h1>
            {
                props.media_type === "video"
                    ? <iframe title="nasaVideo" style={urlStyle} src={props.url}></iframe>
                    : <img src={props.url} alt="awesome pic of space"/>
            }
            <p>{props.explanation}</p>
        </section>
    );
};

export default Landing;