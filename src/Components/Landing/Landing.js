import React from "react";
import styled from "styled-components";
import ReadMoreReact from "read-more-react";


const Wrapper = styled.section`
    width: auto;
    height: 90vh;
`

const LandingH1 = styled.h1`
    font-size: 4rem;
    font-weight: 200;
`
const Date = styled.span`
    font-size: 2rem;
    letter-spacing: 2px;
    font-weight: 200;
    float: right;
`

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const Landing = (props) => {
    const urlStyle = {
        width: '900px',
        height: '600px'
    }
    
    const text = props.data.explanation;
    console.log(text);
    
    return (
        <Wrapper>
            <LandingH1>{props.data.title}<Date>{props.data.date}</Date></LandingH1>
            <ImageWrapper>
                {
                    props.data.media_type === "video"
                        ? <iframe title="nasaVideo" style={urlStyle} src={props.data.url}></iframe>
                        : <img style={urlStyle} src={props.data.url} alt="awesome pic of space"/>
                }
            </ImageWrapper>
            
            <p>{text}</p>
            
        </Wrapper>
    );
};

export default Landing;