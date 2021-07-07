import React from "react";
import styled from "styled-components";

const LinkButton = styled.button`
    font-size: 1.4rem;
    border: none;
    font-weight: 200;
    margin-right: 15px;
    color: white;
    background: #212F3C;
`

const FlexFooter = styled.header`
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    position: relative;
    top: 28%;
`

const H2 = styled.h2`
    font-size: 2rem;
    font-weight: 200;
    color: white;
    margin-left: 20px;
`
const Wrapper = styled.div`
    width: auto;
    height: 20vh;
    background-color: #212F3C;
`


const Footer = () => {
    return (
        <Wrapper>
            <FlexFooter>
                <H2>Views From Nasa</H2>
                <ul>
                    <LinkButton href="#">Item 1</LinkButton>
                    <LinkButton href="#">Item 2</LinkButton>
                    <LinkButton href="#">Item 3</LinkButton>
                </ul>
            </FlexFooter>
        </Wrapper>
    );
};

export default Footer;