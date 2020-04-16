import React from 'react'
import styled from 'styled-components';


{/* <input style={{padding: '0px', borderColor: 'green', backgroundColor: 'black', color: 'green'}}type='name' value={currentName} onChange={e => setName(e.target.value)} /> */}


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