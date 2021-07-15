import styled from "styled-components";

export const Synopse = styled.p`
    max-width: 80vw;
    text-align: justify;
    padding: 0.5rem;
    margin-bottom: 2rem;
    margin-left: 0.5rem;
    font-size: 1.2em; 

`;

const FieldSynopse = ({text}) => {
    return(
        <Synopse>{text}</Synopse>
    );
}

export default FieldSynopse;