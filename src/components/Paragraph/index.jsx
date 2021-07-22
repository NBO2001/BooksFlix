import styled from "styled-components";

export const Paragraph = styled.p`
    color: ${(props) => props.color? (props) => props.color :(props) => props.theme.colors.primary};
    margin-bottom: 0.5rem;
    line-height: 1.8rem;
    font-size: ${(props) => props.font? (props) => props.font: '1.2em'};
`;

const BookParagraph = ({font, color, children}) => {
    return (
        <Paragraph color={color} font={font}>{children}</Paragraph>
    );
}

export default BookParagraph;