import styled from "styled-components";

export const Main = styled.body`
    overflow: hidden;
`;

const MainPage = ({children}) => {
    return(

        <Main>{children}</Main>

    );
};

export default MainPage;