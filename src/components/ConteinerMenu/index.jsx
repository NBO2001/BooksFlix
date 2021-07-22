import styled from "styled-components";

export const MenuItens = styled.div`
    width: 450px;
    display: flex;
    margin-top: 0.3rem;
    @media screen and (max-width:700px) {
        position: absolute;
        background: linear-gradient(rgba(15, 14, 14, 0.8),rgba(43, 39, 39, 0.8)100%);
        display: none;
        top: 8vh;
        justify-content: space-around;
        flex-direction: column;
        height: 92vh;
        width: 100vw;
        z-index: 998;

    }
`;

const ConteinerMenu = ({ id,children }) => {
    return(
        <MenuItens id={id}>
            { children }
        </MenuItens>
    );

}

export default ConteinerMenu;