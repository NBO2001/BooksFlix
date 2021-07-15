import styled from "styled-components";

export const SectionSug = styled.section`
    background-color: ${(props) => props.theme.colors.background};
`;
export const Conteiner = styled.div`
    background:linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url(${(props) => props.photo});
    min-height: 52vh;
    background-repeat: no-repeat;
    background-size: contain;
    object-fit: cover;
    background-position:right;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: ${(props) => props.theme.colors.text};    
`;

const SectionSuggetion = ({children, photo}) => {
    return (
        <SectionSug>
            <Conteiner  photo={photo}>
                {children}
            </Conteiner>
        </SectionSug>
    );
};

export default SectionSuggetion;