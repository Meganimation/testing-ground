import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle, css, keyframes } from 'styled-components'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { About } from './components/About'
import { Home } from './components/Home'
import { User } from './components/User'
import { device } from './components/Breakpoints';
import './App.css';


const defaultProps = {
  device: 'desktop',
};


const TestHeader = styled.h1 `
color: yellow;
font-family: monospace;
margin: 10px;

@media ${device.smallMobile} { 
  color: blue;
}

@media ${device.mobile} { 
  color: red;
}

@media ${device.largeMobile} { 
  color: green;
}

@media ${device.tablet} { 
  color: purple;
}

@media ${device.laptop} { 
  color: orange;
}

@media ${device.largeLaptop} { 
  color: darkBlue;
}

@media ${device.desktop} { 
  color: blue;
}

@media ${device.largeDesktop} { 
  color: white;
}
`

//The above is my preffered method of incorporating dynamic viewports. This is done through importing the breakpoints in 'Breakpoints.js' and then interpolating the values in these styled components. There's bare other ways to do it but this way is sick imo.





const Content = styled.div `
font-family: monospace;
color: darkGreen;
background-color: yellow;
position: absolute;
margin: 8%;
margin-top: 12%;
top: 0px;
text-align: center;
z-index: 999999;
padding-top: 0px;
padding-left: 0px;
@media (max-width: 168px) {
  color: blue;
}

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



const animationRule = css`
  ${animation} 5s infinite alternate;
`

const StyleBox = styled.div `
  background: red;
  width: 10px;
  height: 200px;
  position: absolute;
  left: 55%;
  top: 34%;
  text-align: center;
  display: center;
  padding: 40px;
`

const ExtendedComponent = styled(StyleBox)`
  background-color: black;
  animation: ${animationRule};
`

// the animation keyframes reduce/increase the opacity. The animationRule links to animation keyframe and determines how its going to animate. ExtendedComponent is an extension of StyleBox. It overrides its background color. When the animation reaches 0% opacity, it shows the components background underneath it.


const borderAnimation = keyframes`
  50% {
    opacity: 1;
    border: 2px dotted;
    color: green;
    letter-spacing: 1px;
  }
  
  100% {
    opacity: 1;
    top: 0px;
    padding-left: 15px;
    border: 2px dashed;
    letter-spacing: 2px;
    color: green;
  }
}
`

const borderAnimationRule = css`
  ${borderAnimation} 0.5s infinite alternate;
`


const DivButton = styled.div`
  color: green;
  background-color: darkGreen;
  padding: 10px;
  font-family: monospace;
  top: 0px;
  margin-top: 18vh;
  border: 2px dotted;
  border-radius: 30px;
  z-index: 999999;
  letter-spacing: 1px;

  &:hover {
    animation: ${borderAnimationRule};
    letter-spacing: 1px;
  }
`;
// this is just a div for now... Check the JSX to see how it becomes a button


const DivButtonNav = styled.nav`
display: block;
width: 60px;
`;


const DeprecatedWrapper = styled.marquee`
font-family: monospace;
  color: green;
  padding: 10px;
  top: 80vh;
  margin-top: 10vh;
`;


function App() {

  return (
    <>
    <TestHeader> welcome to localhost:3000... </TestHeader>
      <h1 className='Responsive-Test' > Plz don't judge my CSS </h1>

    <Router> 
      <DivButtonNav>
         <DivButton as="button" > <Link to='/hooks' style={{color: 'lightGreen'}}> hooks  </Link>  </DivButton>
         <DivButton as="button" > <Link to='/about' style={{color: 'lightGreen'}}> notes  </Link>  </DivButton>
         <DivButton as="button" > <Link to='/user/bigboi/mckenny' style={{color: 'lightGreen'}}> user  </Link>  </DivButton>
     </DivButtonNav>

      <Content>
            <Switch>
              <Route exact path='/about' component={About} />
              <Route exact path='/hooks' component={Home}  />
              <Route exact path='/user/:firstname/:lastname' component={User}  /> 
            {/* bug alert */}
            </Switch>
      </Content>
    </Router>


  <StyleBox />
  <ExtendedComponent/>
  {/* The above are some testing components for animation - something I need to look a little bit further into */}


  <DeprecatedWrapper>
    Shoutout to Ryan for the sick marquee
  </DeprecatedWrapper>
</>
  );
}



export default App;