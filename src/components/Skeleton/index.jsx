import React from 'react';
import styled, { keyframes } from 'styled-components';

const KeyFrameLoading = keyframes`
    0%{
        opacity: 0.5s;
    }
    100%{
        opacity: 1;
    }
`;

const LoadingSkeleton = styled.div`
    background-color: gray;
    border-radius: 6px;
    margin-bottom: 0.5rem;
    min-width: ${(props) => props.width};
    min-height:  ${(props) => props.height};
    animation: ${KeyFrameLoading} 500ms infinite alternate;
`;

export default ({width, height}) => <LoadingSkeleton width={width} height={height}/>;
