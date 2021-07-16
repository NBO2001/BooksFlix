import styled from "styled-components";

export const ButtonStyle = styled.button`
    min-height: 4rem;
    min-width: 7rem;
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    border-radius: 15px;
    color: ${(props) => props.theme.colors.text};
    font-size: 1.2em;
    border: 1px solid black;
    background-color: #8c8686;
    :hover{
        background-color: ${(props) => props.theme.colors.primary};
        font-size: 1.3em;
        color: ${(props) => props.theme.colors.background};
    }
`;

const Button = ({onClick, children}) => {
    return(
        <ButtonStyle onClick={onClick}>{children}</ButtonStyle>
    );
}

export default Button;