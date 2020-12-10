import React, { useState } from 'react'
import styled from 'styled-components';
import Form from './HookComponents/Form';
import CakeStore from './HookComponents/CakeStore';
import Ref from './HookComponents/Ref';
import Counter from './HookComponents/Counter';
import UseLayout from './HookComponents/UseLayout';
import { css, keyframes } from 'styled-components'
import { device } from './Breakpoints';






export const HooksPage = () => {

    const [counterVisibility, setCounterVisibility] = useState(false)
    const [cakeStoreVisibility, setCakeStoreVisibility] = useState(false)
    const [refVisibility, setRefVisibility] = useState(false)
    const [formVisibility, setFormVisibility] = useState(false)
    const [useLayoutVisibility, setUseLayoutVisibility] = useState(false)



const animation = keyframes`
  0% {
    border-color: black;
  }
  100% {
    border-color: darkGreen;
    opacity: 70%;
  }
}
`

const animationRule = css`
  ${animation} 5s infinite alternate;
`


  
  
const Box = styled.div ` 


  border: 1px dashed;
  border-color: green;
  width: 300px;
  height: 400px;
  position: absolute;
  right: -60%;
  top: 5vh;
  text-align: center;
  display: center;
  padding: 40px;
  color: white;
  z-index: 9;
  animation: ${animationRule};

  @media ${device.mobile} { 
    background-color: blue;
    top: 20vh;
    right: 50vh;
    width: 300px;
    height: 400px;
  }

  @media ${device.laptop} { 
    background-color: green;
    top: 5vh;
    width: 300px;
    height: 400px;
    right: -60%;
  }
  `

  
const HookNavBar = styled.nav `
background-color: red;
display: block;
width: 50%;

@media ${device.mobile} { 
  background-color: green;
}

@media ${device.tablet} { 
  background-color: purple;
}

@media ${device.laptop} { 
  background-color: blue;
}

@media ${device.largeDesktop} { 
  background-color: lightBlue;
}
`


const Button = styled.button `
  color: darkGreen;
  font-family: monospace
  font-weight: 900px;
  background: black;
  border-radius: 5%;
  padding: 10px;
  width: 150px;
  height: 70px
  margin: 20px;
  text-align: center;
  display: inline-block;
  border: 2px;
  border-style: dotted;
  border-color: darkGreen;

    &:hover {
      color: green;
      border: 2px;
      border-style: dotted;
      border-color: lightGreen;
    }
  `

  function hookButton(theState, settingState, name) {
    switch(theState) {
        case counterVisibility:
          return (  <Button onClick={(e) =>  settingState(!theState)} >{name}  {theState ? <p>ON</p> : <p>OFF</p>} </Button> )

        case refVisibility:
          return ( <Button onClick={(e) => settingState(!theState)} >{name}  {theState ? <p>ON</p> : <p>OFF</p>} </Button> )

        case formVisibility:
          return ( <Button onClick={(e) => settingState(!theState)} >{name}  {theState ? <p>ON</p> : <p>OFF</p>} </Button> )

        case cakeStoreVisibility:
          return ( <Button onClick={(e) => settingState(!theState)} >{name}  {theState ? <p>ON</p> : <p>OFF</p>} </Button> )

        case useLayoutVisibility:
          return ( <Button onClick={(e) => settingState(!theState)} >{name}  {theState ? <p>ON</p> : <p>OFF</p>} </Button> )

        default:
          return null
    }
  }

    return (
<div>

  <HookNavBar>
      {hookButton(counterVisibility, setCounterVisibility, 'Counter')}

      {hookButton(refVisibility, setRefVisibility, 'Ref')}
      {hookButton(formVisibility, setFormVisibility, 'Form')}
      {hookButton(cakeStoreVisibility, setCakeStoreVisibility, 'Cake Store')}

      {hookButton(useLayoutVisibility, setUseLayoutVisibility, 'useLayout')}
  </HookNavBar>

  <>

  {counterVisibility ? <Box><Counter /></Box> : null}
  {formVisibility ? <Box><Form /></Box> : null}
  {cakeStoreVisibility ? <Box><CakeStore /></Box>  : null}
  {refVisibility ? <Box> <Ref/> </Box> : null}
  {useLayoutVisibility ? <Box> <UseLayout/> </Box> : null}
  </>
</div>
    )
}
