import styled from "styled-components";

export const Synopse = styled.p`
    max-width: 80vw;
    text-align: justify;
    padding: 0.5rem;
    margin-bottom: 2rem;
    margin-left: 0.5rem;
    font-size: 1.1em; 
    color: ${(props) => props.color?(props) => props.color: (props) => props.theme.primary};
`;

const FieldSynopse = ({color, text}) => {
    return(
        <Synopse color={color}>{text}</Synopse>
    );
}

export default FieldSynopse;