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

const TestHeader = styled.h1`
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
`;

//The above is my preffered method of incorporating dynamic viewports. This is done through importing the breakpoints in 'Breakpoints.js' and then interpolating the values in these styled components. There's bare other ways to do it but this way is sick imo.

const Content = styled.div`
  font-family: monospace;
  color: darkGreen;
  position: absolute;
  top: 0px;
  text-align: center;
  margin: 10%;

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

const StyleBox = styled.div`
  background: green;
  width: 10px;
  height: 200px;
  position: absolute;
  left: 90%;
  text-align: center;
  display: center;
  padding: 40px;
`;

const ExtendedComponent = styled(StyleBox)`
  background-color: black;
  animation: ${animationRule};
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

//create a styled component that takes up all the space on the page
const DraggablePage = styled.section`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 80vw;
  height: 80vh;
  background-color: darkGray;
`;

const Ele = styled.div`
  background: red;
  cursor: move;
  margin: 10px;
  position: relative;
  height: 5rem;
  width: 5rem;
  resize: both;
`;
const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  padding: 15px;
`;

const StyledBoard = styled(Board)`
display: flex;
flex-direction: column;
width: 100%;
max-width: 300px;
background-color: #313131;
padding: 15px;


.card{
  padding: 15px
  background-color: white;
  resize: horizontal;
}
`;

function DraggableComponentPage() {
  const [characters, updateCharacters] = useState(fakeData);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <DraggablePage>
      You can rearrange the blocks by dragging them around.
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <ul
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {characters.map(({ id, name }, index) => {
                return (
                  <Draggable key={id} draggableId={id.toString()} index={index}>
                    {(provided) => (
                      <Ele
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <p>hello I am {name}</p>
                      </Ele>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </DraggablePage>
  );
}

function Board(props) {
  const drop = (e) => {
    e.preventDefault();

    const card_id = e.dataTransfer.getData("card_id");

    const card = document.getElementById(card_id);
    card.style.display = "block";

    e.target.appendChild(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        id={props.id}
        onDrop={drop}
        onDragOver={dragOver}
        className={props.className}
      >
        {props.children}
      </div>
    </>
  );
}

function Card(props) {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
    // setTimeout(() => {
    //   target.style.display = "none";
    // }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={props.className}
      id={props.id}
      onDragStart={dragStart}
      onDragOver={dragOver}
      draggable={props.draggable}
    >
      {props.children}
    </div>
  );
}

function HomePage() {
  const [draggableComponentIsVisible, setDraggableComponentIsVisible] =
    useState(false);
  const [draggableComponentIsVisible2, setDraggableComponentIsVisible2] =
    useState(false);

  return (
    <>
      <TestHeader> welcome to localhost:3000... </TestHeader>
      <h1 className="Responsive-Test"> Plz don't judge my CSS </h1>
      <button
        onClick={() =>
          setDraggableComponentIsVisible(!draggableComponentIsVisible)
        }
      >
        click to show draggable component
      </button>
      <br />
      {draggableComponentIsVisible && <DraggableComponentPage />}
      <button
        onClick={() =>
          setDraggableComponentIsVisible2(!draggableComponentIsVisible)
        }
      >
        click to show draggable component 2
      </button>
      {draggableComponentIsVisible2 && (
        <DraggablePage>
          <Flexbox>
            <StyledBoard id="board-1" className="board">
              <Card id="card-1" className="card" draggable="true">
                <p>Card One</p>
              </Card>
            </StyledBoard>

            <StyledBoard id="board-2" className="board">
              <Card id="card-2" className="card" draggable="true">
                <p>Card Two</p>
              </Card>
              <Card id="card-3" className="card" draggable="true">
                <p>Card three</p>
              </Card>
            </StyledBoard>
          </Flexbox>
        </DraggablePage>
      )}
      <StyleBox />

      <GlobalStyle />
      {/* The above is some testing components for animation - something I need to look a little bit further into */}
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
