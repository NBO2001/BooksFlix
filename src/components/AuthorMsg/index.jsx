import React from 'react'
import styled from 'styled-components'

export const FieldMsg = styled.div`
    
    top: 20vh;
    height: 50vh;
    padding: 1rem;

`;

const AuthorMsg = ({ children }) => {
    return (
        <FieldMsg>
            { children }
        </FieldMsg>
    )
}

export default AuthorMsg
