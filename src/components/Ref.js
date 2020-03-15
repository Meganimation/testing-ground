import React, { Component, useRef } from "react";

 const Ref=()=> {


  let textInput = useRef();
  let buttonInput = useRef();


    return (
      <>


        <input type="text" ref={textInput} placeholder="placeholder text" />
        <br/> 
        <button onClick={()=>{console.log(textInput.current)}}>Console log the ref</button>
        <br />
        <button onClick={()=>{textInput.current.focus()}}>Focus on the ref</button>
        <br /> 
        <button name="Button the Benjamin" value="Ugh" style={{color: 'red'}} ref={buttonInput} onClick={()=>{textInput.current.placeholder = 'Hello'}}>Change placeholder to 'Hello'</button>
        <br /> 
        <button onClick={()=>{buttonInput.current.style.color = 'black'}}> Change the above button's text color </button>
        <br /> 
        <button onClick={()=>{alert( `That button's name is ${buttonInput.current.name}`)}} > What is that buttons name? </button>
        <br />
        <button onClick={()=>{buttonInput.current.style.backgroundColor='red'; buttonInput.current.innerText = 'This one'}} > But which button is that? </button>
      </>
    );
  }



export default Ref

// add refs to each page object, when a tab is clicked, scroll to that ref?