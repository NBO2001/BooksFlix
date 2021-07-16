import styled from "styled-components";

export const Paragraph = styled.p`
    margin-bottom: 0.5rem;
    line-height: 1.8rem;
`;

const BookParagraph = ({children}) => {
    return (
        <Paragraph>{children}</Paragraph>
    );
}

export default BookParagraph;