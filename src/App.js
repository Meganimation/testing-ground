import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from './components/Form';
import CakeStore from './components/CakeStore';
import Ref from './components/Ref';
import Counter from './components/Counter';
import styled from 'styled-components';


function App() {

const [counterVisibility, setCounterVisibility] = useState(false)
const [cakeStoreVisibility, setCakeStoreVisibility] = useState(false)
const [refVisibility, setRefVisibility] = useState(false)
const [formVisibility, setFormVisibility] = useState(false)

const dispatch = useDispatch()
const comp = useSelector(state => state.comp)


const Box = styled.div `
background-color: #FF4136;
width: 300px;
height: 300px;
position: absolute;
left: 50%;
top: 50%;
`


const Header = styled.nav `
top: 0
width: 100%;
height: 300px;
position: fixed;
flex-align: 3
left: 50%;

`


const Content = styled.nav `
position: absolute;
top: 100px;

`


  return (
    <>

    <Header >

<button onClick={(e) => setCounterVisibility(!counterVisibility)} >counter:  {counterVisibility ? <p>ON</p> : <p>OFF</p>} </button>
.....................
<button onClick={(e) => setRefVisibility(!refVisibility)} >ref:  {refVisibility ? <p>ON</p> : <p>OFF</p>}</button>
.....................
<button onClick={(e) => setFormVisibility(!formVisibility)} > form:  {formVisibility ? <p>ON</p> : <p>OFF</p>}</button>
.....................
<button onClick={(e) => setCakeStoreVisibility(!cakeStoreVisibility)} >cake store: {cakeStoreVisibility ? <p>ON</p> : <p>OFF</p>}</button>
</Header>

    <Content>

    <div className="App">

      <h1>Welcome to the testing ground.</h1>
        <pr> Like a fairground, things break often here.</pr>
      <br />
        <pr> Unike a fairground, you won't die.</pr>
        <h2>Select below to view componenets and their purpose: </h2>

    </div>

current visbility: {counterVisibility ? <p>ON</p> : <p>OFF</p>}
<br/>




I will add a case statement that will show a component depending on which button was clicked, which should render in the same styled component.
<br/>
<div >
  {counterVisibility ? 
  <Box>
<Counter /></Box> : <p>Counter Component is not visibile</p>}
</div>

<div >
  {formVisibility ? 
  <Box><Form /></Box> : <p>Form Component is not visibile</p>}
</div>


<br />
<br />

<div >
  {cakeStoreVisibility ? 
<Box> <CakeStore /></Box>  : <p>CakeStore Component is not visibile</p>}
</div>
<br />

<br />
<br />
<br />

<div >
  {refVisibility ? 
<Box> <Ref/> </Box> : <p>Ref Component is not visibile</p>}
</div>

    </Content>
</>
  );
  
}

export default App;