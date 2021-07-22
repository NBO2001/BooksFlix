import styled from "styled-components";

export const TitleLogo = styled.h2`
    color: #0583F2;
    font-family: 'Oi', Arial, Helvetica, sans-serif;
    margin-left: 0.5rem;
    font-size: 1.7em;
    cursor: pointer;
`;

const Logo = ({children}) => {
    return(
        <TitleLogo>{children}</TitleLogo>
    );
}

export default Logo;
