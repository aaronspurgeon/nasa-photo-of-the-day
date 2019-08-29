import React from "react";
import styled from "styled-components";


const Wrapper = styled.section`
    width: auto;
    height: 90vh;
`

const LandingH1 = styled.h1`
    font-size: 3rem;
    font-weight: 200;
`
const Date = styled.span`
    font-size: 2rem;
    letter-spacing: 2px;
    font-weight: 200;
    float: right;
`

const Landing = (props) => {
    const urlStyle = {
        width: 'auto',
        height: '600px'
    }
    console.log(props);
    
    
    return (
        <Wrapper>
            <LandingH1>{props.data.title}<Date>{props.data.date}</Date></LandingH1>
            {
                props.data.media_type === "video"
                    ? <iframe title="nasaVideo" style={urlStyle} src={props.data.url}></iframe>
                    : <img style={urlStyle} src={props.data.url} alt="awesome pic of space"/>
            }
            <p>{props.data.explanation}</p>
        </Wrapper>
    );
};

export default Landing;