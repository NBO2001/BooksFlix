import styled from "styled-components";

export const BackStyle = styled.section`
    background-color: ${(props) => props.theme.colors.background};
    height: 100vh;
    width: 100vw;

    @media screen and (max-width:700px) {
    }

`;

const Background = ({children}) => {
    return(
    <BackStyle>
       { children }
    </BackStyle>
    );
};

export default Background;