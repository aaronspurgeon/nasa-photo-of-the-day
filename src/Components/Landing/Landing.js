import React from "react";
import styled from "styled-components";
import ReadMoreReact from "read-more-react";


const Wrapper = styled.section`
    width: auto;
    height: 90vh;
    margin-bottom: 40px;
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

const Info = styled.p`
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 300;
    word-spacing: 2px;
`

const InfoWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`

const Landing = (props) => {
    const urlStyle = {
        width: '1200px',
        height: '600px',
        marginBottom: '40px'
    }
    
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
            <InfoWrapper>
                <Info>{props.data.explanation}</Info>
            </InfoWrapper>
        </Wrapper>
    );
};

export default Landing;