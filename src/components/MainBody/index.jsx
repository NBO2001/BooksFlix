import styled from "styled-components";

export const FakeBody = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.colorsread.background};
    perspective: 1px;
    transform-style: preserve-3d;
    overflow-y: scroll;
    overflow-x: hidden;
`;

const MainBody = ({ children }) => {
    return(
        <FakeBody>{ children }</FakeBody>
    );
}

export default MainBody;