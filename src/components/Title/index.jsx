import styled from "styled-components";

export const Title = styled.h2`
    font-size: 2.5em;
    font-weight: bolder;
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 1rem;
    margin-left: 0.5rem;
`;

const TitleBook = ({bookTitle}) =>{
    return (
        <Title> {bookTitle}</Title>
        );
};

export default TitleBook;