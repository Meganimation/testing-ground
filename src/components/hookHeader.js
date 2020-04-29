import React from 'react'
import styled from 'styled-components';


const HookHeaderStyle = styled.h2`
font-family: monospace;
padding: 10px;
text-align: center:
word-spacing: 3px;
color: lightGreen;
background-color: black;

        &:hover {
            color: lightGreen;
        }
`

const HookHeader=({ text, ...props})=> {
    return (
    <HookHeaderStyle>{text}</HookHeaderStyle>
    )
}

export default HookHeader