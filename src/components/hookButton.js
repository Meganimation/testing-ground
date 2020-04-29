import React from 'react'
import styled from 'styled-components';


const HookButtonStyle = styled.button`
padding: 7px;
color: lightGreen;
background-color: black;
border: 1px dotted darkGreen;
border-radius: 5px;
margin-top: 5px;

        &:hover {
            color: white;
            border: 1px dotted green;
        }
`

const HookButton=({onClick, text, ...props})=> {
    return (
    <HookButtonStyle onClick={onClick}>{text}</HookButtonStyle>
    )
}

export default HookButton
