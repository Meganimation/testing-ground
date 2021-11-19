import React, { useState, useEffect, useRef } from "react";
import DraggableExampleOne from "./DraggableExampleOne";
import DraggableExampleTwo from "./DraggableExampleTwo";
import DraggableExampleThree from "./DraggableExampleThree";
import styled from "styled-components";


const DraggablePage = styled.section`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 80vw;
  height: 80vh;
  background-color: darkGray;
`;


const StyledButton = styled.button`
padding: 10px;
margin: 10px;
height: 50px;
background: black;
color: darkGreen;
width: 130px;
border-radius: 5px;
border: 1px dashed darkGreen;

 &:hover {
    border: 1px solid darkGreen;
 }
`

const BackButton = styled.button`
padding: 10px;
z-index: 4;
position: absolute;
top: -60px;
margin: 10px;
height: 50px;
background: black;
color: darkGreen;
width: 130px;
border-radius: 5px;
border: 1px dashed darkGreen;

 &:hover {
    border: 1px solid darkGreen;
 }
`

function DraggablesMain() {
    const [firstExampleIsVisible, setFirstExampleIsVisible] =
    useState(false);

  const [secondExampleIsVisible, setSecondExampleIsVisible] =
    useState(false);

    const [thirdExampleIsVisible, setThirdExampleIsVisible] =
    useState(false);


    return (
        <>
        <h1>Drag and Drop Examples </h1>
 

        <StyledButton
          onClick={() =>
            setFirstExampleIsVisible(!firstExampleIsVisible)
          }
        >
          Example 1
        </StyledButton>
        <br />
        {firstExampleIsVisible && <DraggablePage><DraggableExampleOne /> <BackButton onClick={()=>{setFirstExampleIsVisible(false)}}>Go back</BackButton></DraggablePage>}
        <StyledButton
          onClick={() =>
            setSecondExampleIsVisible(!secondExampleIsVisible)
          }
        >
          Example 2
        </StyledButton>
        {secondExampleIsVisible && <DraggablePage><DraggableExampleTwo /><BackButton onClick={()=>{setSecondExampleIsVisible(false)}}>Go back</BackButton></DraggablePage>}
        <br />
        <StyledButton
          onClick={() =>
            setThirdExampleIsVisible(!thirdExampleIsVisible)
          }
        >
          Example 3
        </StyledButton>
        {thirdExampleIsVisible && <DraggablePage><DraggableExampleThree /><BackButton onClick={()=>{setThirdExampleIsVisible(false)}}>Go back</BackButton></DraggablePage>}
      </>
    )
}

export default DraggablesMain
