import React from 'react';
import styled from "styled-components";
import Select from "../Select";

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


const TopBar = ({onChange}) => {
    return(
        <TopMenu>

            <Title>BookFlix</Title>
            <NavMenu>
                <ItensMenu href="/">Recents</ItensMenu>
                <ItensMenu href="/">New Books</ItensMenu>
                <ItensMenu href="/">Import Book</ItensMenu>
                <Select onChange={onChange}>
                    <option value="pt">Pt - Br</option>
                    <option value="en">En - USA</option>
                </Select>
               
            </NavMenu>
        </TopMenu>
    );
};

export default TopBar;