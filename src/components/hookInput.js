import React from 'react'
import styled from 'styled-components';



const HookInputStyle = styled.input`

font-family: monospace;
padding: 10px;
text-align: center:
word-spacing: 3px;
color: green;
background-color: black;
border-color; green;

        &:hover {
            color: lightGreen;
        }

`

const HookInput=({ text, onChange, ...props})=> {
    return (
        <>
    <HookInputStyle onChange={onChange} />
    </>
    )
}

export default HookInput