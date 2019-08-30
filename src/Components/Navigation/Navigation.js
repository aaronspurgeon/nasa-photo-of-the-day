import React from "react";
import styled from "styled-components";

const LinkButton = styled.button`
    font-size: 1.4rem;
    border: none;
    font-weight: 200;
    margin-right: 15px;
`

const NavHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const H2 = styled.h2`
    font-size: 2rem;
    font-weight: 200;
`
const Wrapper = styled.div`
    width: auto;
    height: 5vh;
    margin-bottom: 40px;
`


const Navigation = () => {
    return (
        <Wrapper>
            <NavHeader>
                <H2>Views From Nasa</H2>
                <ul>
                    <LinkButton href="#">Item 1</LinkButton>
                    <LinkButton href="#">Item 2</LinkButton>
                    <LinkButton href="#">Item 3</LinkButton>
                </ul>
            </NavHeader>
        </Wrapper>
    );
};


export default Navigation;