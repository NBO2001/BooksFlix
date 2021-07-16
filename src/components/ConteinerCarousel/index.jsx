import styled from "styled-components";

export const Conteinner = styled.section`
    min-height: 40vh;
    background-color: ${(props) => props.theme.colors.background};
`;

const ConteinerCarousel = ({children}) => {
    return(
        <Conteinner>{children}</Conteinner>
    );
};

export default ConteinerCarousel;