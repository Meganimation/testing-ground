import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from './components/Form';
import CakeStore from './components/CakeStore';
import Ref from './components/Ref';
import Counter from './components/Counter';
import UseLayout from './components/UseLayout';
import styled from 'styled-components';
import { createGlobalStyle, css, keyframes } from 'styled-components'
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


import {About} from './components/About'
import {Home} from './components/Home'
import {User} from './components/User'




function App() {



const StyleBox = styled.div `
background: darkGreen;
color: red;
border-size: 1px;
border-color: white;
width: 10px;
height: 300px;
position: absolute;
left: 55%;
top: 34%;
text-align: center;
display: center;
padding: 40px;
`
const TestHeader = styled.h1 `
color: green;
font-family: monospace;
margin: 10px;
`

const Content = styled.div `
font-family: monospace;
color: darkGreen;
position: absolute;
margin: 8%;
margin-top: 12%;
top: 0px;
text-align: center;
display: center;
z-index: 999999;
padding-top: 50px;
padding-left: 50px;

`

// ------ SASS STYLED COMPONENTS


//This background now overides the StyleBox components' background.


const GlobalStyle = createGlobalStyle`
  body {
    font-family: monospace;
    color: darkGreen;
  }
  h1  {
    font-family: monospace;
    color: darkGreen;
    }

    a {
      color: white;
    }

  
`

// the createGlobalStyle API allows us to change the styling of an entire page by its tag


const animation = keyframes`
  0% {
    opacity: 0;
    top: 900px;
  }
 
  100% {
    opacity: 1;
    top: 0px;
  }
}
`

const borderAnimation = keyframes`
  0% {
    opacity: 1;
    padding-left: 10px;
    border: 2px dashed;
    color: darkGreen;
  }
 n 
  100% {
    opacity: 1;
    top: 0px;
    padding-left: 30px;
    border: 2px dotted;
    letter-spacing: 20px;
    color: green;
  }
}
`
const animationRule = css`
  ${animation} 5s infinite alternate;
`

const borderAnimationRule = css`
  ${borderAnimation} 1s infinite alternate;
`

const ExtendedComponent = styled(StyleBox)`
  background-color: black;
  animation: ${animationRule};
  top: 0;
  right: 0;
  position: absolute:
  height: 900px;
`

// the animation keyframes reduce/increase the opacity. The animationRule links to animation keyframe and determines how its going to animate. ExtendedComponent is an extension of StyleBox. It overrides its background color. When the animation reaches 0% opacity, it shows the components background underneath it.

const FakeButton = styled.div`
  color: green;
  background-color: darkGreen;
  padding: 10px;
  font-family: monospace;
  top: 0px;
  margin-top: 18vh;
  border: 2px dashed;


  &:hover {
    animation: ${borderAnimationRule};
    background-color: ${borderAnimation};
  }
`;
// this is just a div for now... Check the JSX to see how it becomes a button


const DeprecatedWrapper = styled.div`
font-family: monospace;
  color: green;
  padding: 10px;
  top: 80vh;
  margin-top: 10vh;
`;

const RouterNav = styled.nav`
text-align: center;
width: 100%;



`
  return (
  <>
 <TestHeader> welcome to localhost:3000... </TestHeader>


<Router> 
<FakeButton as="button" > <Link to='/' style={{color: 'white'}}> hooks  </Link>  </FakeButton>
<br />
<FakeButton as="button" > <Link to='/about' style={{color: 'white'}}> algorithms  </Link>  </FakeButton>
<br />
<FakeButton as="button" >  <Link to='/user/bigboi/mckenny' style={{color: 'white'}}> user  </Link>  </FakeButton>


  <Content>
          <br />
       

            
            <Switch>
            <Route  exact path='/about' component={About} />
            <Route exact path='/' component={Home}  />
            <Route exact path='/user/:firstname/:lastname' component={User}  />
            </Switch>
     
  
          </Content>
          </Router>
 


<StyleBox />
<ExtendedComponent/>


<DeprecatedWrapper >
<marquee>shoutout to ryan</marquee>
</DeprecatedWrapper >
</>
  );
}



export default App;