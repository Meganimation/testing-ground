import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { createGlobalStyle, css, keyframes } from "styled-components";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { NotesPage } from "./pages/NotesPage";
import { HooksPage } from "./pages/HooksPage";
import { User } from "./components/User";
import { device } from "./utils/Breakpoints";
import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import fakeData from "./fakeData.json";
import DraggablesPage from "./pages/DraggablesPage";
import Test from "./testcomponents/Test";
import CSSPage from "./pages/CSSPages/CSSPage";
import APIPage from "./pages/APIPages.tsx/APIPage";
const TestHeader = styled.h1`
  color: yellow;
  font-family: monospace;

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
`;

//The above is my preffered method of incorporating dynamic viewports. This is done through importing the breakpoints in 'Breakpoints.js' and then interpolating the values in these styled components. There's bare other ways to do it but this way is sick imo.

const Content = styled.div`
  font-family: monospace;
  color: darkGreen;
  position: absolute;
  top: 0px;
  text-align: center;
  margin: 5vw;

  @media (max-width: 168px) {
    color: blue;
  }
`;

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
`;

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
`;

const animationRule = css`
  ${animation} 5s infinite alternate;
`;

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
`;

const borderAnimationRule = css`
  ${borderAnimation} 0.5s infinite alternate;
`;

const DivButton = styled.div`
  color: green;
  background-color: darkGreen;
  padding: 10px;
  font-family: monospace;
  top: 0px;
  border: 2px dotted;
  border-radius: 30px;
  z-index: 999999;
  letter-spacing: 1px;
  margin-top: 20px;

  &:hover {
    animation: ${borderAnimationRule};
    letter-spacing: 1px;
  }
`;
// this is just a div for now... Check the JSX to see how it becomes a button

const DivButtonNav = styled.nav`
  position: fixed;
  display: block;
  width: 20px;
  justify-items: space-between;
  margin-top: 20vh;
  height: 100vh;
  z-index: 2;
`;

const HomeContent = styled.div`
  width: 100vw;
  height: 100vh;
  `

function HomePage() {
  const [showDraggableContent, setShowDraggableContent] = useState(false);
  const [showCSSContent, setShowCssContent] = useState(false);
  const [showAPIContent, setShowAPIContent] = useState(false);

  const allLocalStates = [showDraggableContent, showCSSContent];
  return (
    <>
      {!allLocalStates.includes(true) ? (
        <>
          <TestHeader>Holy shit I need to tidy this place up. </TestHeader>
          <h1 className="Responsive-Test"> Plz don't judge my CSS </h1>
        </>
      ) : null}
<HomeContent>
      <button
        onClick={() => {
          setShowDraggableContent(!showDraggableContent);
        }}
      >
        Toggle Draggable Content
      </button>

      <button
        onClick={() => {
          setShowCssContent(!showCSSContent);
        }}
      >
        Toggle CSS Content
      </button>
      <button
        onClick={() => {
          setShowAPIContent(!showAPIContent);
        }}
      >
        Toggle API Content
      </button>
      {showDraggableContent && <DraggablesPage />}

      {showCSSContent && <CSSPage />}
      {showAPIContent && <APIPage />}
      </HomeContent>
    </>
  );
}

function App() {
  return (
    <>
      <Router>
        <DivButtonNav>
          <DivButton as="button">
            <Link to="/" style={{ color: "lightGreen" }}>
              home
            </Link>
          </DivButton>
          <DivButton as="button">
            <Link to="/hooks" style={{ color: "lightGreen" }}>
              hooks
            </Link>
          </DivButton>
          <DivButton as="button">
            <Link to="/notes" style={{ color: "lightGreen" }}>
              notes
            </Link>
          </DivButton>
          <DivButton as="button">
            <Link to="/user/bigboi/mckenny" style={{ color: "lightGreen" }}>
              user
            </Link>
          </DivButton>
        </DivButtonNav>

        <Content>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/notes" component={NotesPage} />
            <Route exact path="/hooks" component={HooksPage} />
            <Route exact path="/user/:firstname/:lastname" component={User} />
            {/* bug alert */}
          </Switch>
        </Content>
      </Router>
    </>
  );
}

export default App;
