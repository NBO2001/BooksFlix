import React from 'react';
import styled from "styled-components";


export const TopMenu = styled.section`
    background-color: ${(props) => props.theme.colors.background};
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Title = styled.h1`
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
    padding: 0.5rem;
    font-size: 2em;
`;

export const NavMenu = styled.nav`
    font-size: 1.3em;
`;

export const ItensMenu = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    margin-left: 0.2rem;
    opacity: 50%;
    padding: 0.5rem;
    :hover{
        color: ${(props) => props.theme.colors.primary};
        opacity: 100%;
    };
`;


const TopBar = () => {
    return(
        <TopMenu>

            <Title>BookFlix</Title>
            <NavMenu>
                <ItensMenu href="/">Recents</ItensMenu>
                <ItensMenu href="/">New Books</ItensMenu>
                <ItensMenu href="/">Import Book</ItensMenu>
            </NavMenu>
        </TopMenu>
    );
};

export default TopBar;