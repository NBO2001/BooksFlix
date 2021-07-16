import styled from "styled-components";


export const DivContent = styled.div`
    max-height: 30vh;
    width: 100%;
    overflow: auto;
    text-align: justify;
    font-size: ${(props) => props.fontsize? (props) => props.fontsize: "1.3em" };
`;

const SectionSynpse = ({ fontsize, children }) => {
    return(
        <DivContent fontsize={fontsize}>
           { children }
        </DivContent>
    );
};

export default SectionSynpse;