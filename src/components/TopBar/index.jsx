import React from 'react';
import styled from "styled-components";
import Select from "../Select";

export const TopMenu = styled.section`
    background-color: ${(props) => props.theme.colors.deep};
    height: 10vh;
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width:700px) {
    }
`;


const TopBar = ({children}) => {
    return(
        <TopMenu>
            { children }
        </TopMenu>
    );
};

export default TopBar;