import styled from "styled-components";

export const ButtonStyle = styled.button`
    height: 3rem;
    width: 150px;
    margin: 0.5rem;
    cursor: pointer;
    border-radius: 15px;
    color: ${(props) => props.theme.colors.text};
    font-size: 1.2em;
    padding: 0.3rem;
    font-family: 'Lato', sans-serif;
    border: 1px solid black;
    background-color: ${(props) => props.theme.colors.buttuns};
    :hover{
        background-color: ${(props) => props.theme.colors.buttonBackgroud};
        color: ${(props) => props.theme.colors.primary};
    }
`;

const Button = ({id, onClick, children}) => {
    return(
        <ButtonStyle id={id} onClick={onClick}>{children}</ButtonStyle>
    );
}

export default Button;