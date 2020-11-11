import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Form from './HookComponents/Form';
import CakeStore from './HookComponents/CakeStore';
import Ref from './HookComponents/Ref';
import Counter from './HookComponents/Counter';
import UseLayout from './HookComponents/UseLayout';
import { createGlobalStyle, css, keyframes } from 'styled-components'

export const Home = () => {

    const [counterVisibility, setCounterVisibility] = useState(false)
    const [cakeStoreVisibility, setCakeStoreVisibility] = useState(false)
    const [refVisibility, setRefVisibility] = useState(false)
    const [formVisibility, setFormVisibility] = useState(false)
    const [useLayoutVisibility, setUseLayoutVisibility] = useState(false)
    const dispatch = useDispatch()
    const comp = useSelector(state => state.comp)


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
  background-color: black; 
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
  `

  
const Header = styled.nav `
  top: 90px;
  width: 100%;
  height: 300px;
  position: sticky-left;
  left: 0;
  flex-direction: row;
  flex: 8;
  -webkit-box-align: center;
  line-height: 13vh;
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
          break;
        case refVisibility:
          return ( <Button onClick={(e) => settingState(!theState)} >{name}  {theState ? <p>ON</p> : <p>OFF</p>} </Button> )
        break;
        case formVisibility:
          return ( <Button onClick={(e) => settingState(!theState)} >{name}  {theState ? <p>ON</p> : <p>OFF</p>} </Button> )
        break;
        case cakeStoreVisibility:
          return ( <Button onClick={(e) => settingState(!theState)} >{name}  {theState ? <p>ON</p> : <p>OFF</p>} </Button> )
        break;
        case useLayoutVisibility:
          return ( <Button onClick={(e) => settingState(!theState)} >{name}  {theState ? <p>ON</p> : <p>OFF</p>} </Button> )
        break;
    }
  }

    return (
<div>
  <Header >
      {hookButton(counterVisibility, setCounterVisibility, 'Counter')}
      <br />
      {hookButton(refVisibility, setRefVisibility, 'Ref')}
      {hookButton(formVisibility, setFormVisibility, 'Form')}
      {hookButton(cakeStoreVisibility, setCakeStoreVisibility, 'Cake Store')}
      <br />
      {hookButton(useLayoutVisibility, setUseLayoutVisibility, 'useLayout')}
  </Header>

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
