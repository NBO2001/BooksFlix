import { useState } from "react";
import styled from "styled-components";

export const BtnMenu = styled.button`
    display:none;

    @media screen and (max-width:700px) {
        display: block;
        cursor: pointer;
        border-radius: 10px;
        color: ${(props) => props.theme.colors.text};
        font-size: 1.2em;
        padding: 0.2rem;
        margin-right: 0.3rem;
        font-family: 'Lato', sans-serif;
        border: 1px solid black;
        background-color: ${(props) => props.theme.colors.buttuns};
        :hover{
            background-color: ${(props) => props.theme.colors.buttonBackgroud};
            color: ${(props) => props.theme.colors.primary};
        }
    }
`;

const ButtomMenu = () => {

    const [act, setAct] = useState('disabled');
    const showMenus = () => {

        const btnMenu = document.querySelector('#showMenu');
        if(act === 'disabled'){
             setAct("active");
            btnMenu.style.display = 'Flex';
        }else{
            setAct("disabled");
            btnMenu.style.display = 'none';
        }
    }

    return(<BtnMenu onClick={showMenus}>Menu</BtnMenu>);

};

export default ButtomMenu;