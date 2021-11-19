import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";



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

function DraggableExampleTwo() {
    return (
      <>
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
      </>
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
      setTimeout(() => {
        target.style.display = "none";
      }, 0);
    };
  
    const dragOver = (e) => {
      console.log('card dragOver', e.target.innerText)
      e.target.backgroundColor = 'red'
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

  export default DraggableExampleTwo