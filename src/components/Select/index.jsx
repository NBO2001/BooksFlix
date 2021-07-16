import styled from "styled-components";

export const SelectItem = styled.select`
    min-height: 2rem;
    min-width: 8rem;
    border-radius: 16px;
    border: 0;
    padding: 0.5rem;
    font-weight: bolder;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.background};
`;

const Select = ({ onChange,children }) =>{
    return (
        <SelectItem onChange={onChange}>{ children }</SelectItem>
    );
}

export default Select;