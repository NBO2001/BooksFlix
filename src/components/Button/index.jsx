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
    @media screen and (max-width:700px) {
        width: ${(props) => props.width? (props) => props.width :"150px"};
    }
`;

const Button = ({id, width, onClick, children}) => {
    return(
        <ButtonStyle width={width} id={id} onClick={onClick}>{children}</ButtonStyle>
    );
}

export default Button;