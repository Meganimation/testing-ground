import React, { useRef } from "react";
import HookButton from '../hookButton'
import HookHeader from '../hookHeader'

 const Ref=()=> {

  let textInput = useRef();
  let buttonInput = useRef();


    return (
      <>
        <HookHeader text={'useRef'}/>
          <input type="text" ref={textInput} placeholder="placeholder text" />
        <br/> 
          <HookButton text={'console log the ref'}  onClick={()=>{console.log(textInput.current)}}>Console log the ref</HookButton >
        <br />
          <HookButton  text={'focus on the ref'}  onClick={()=>{textInput.current.focus()}}>Focus on the ref</HookButton >
        <br /> 
          <HookButton  text={'change placeholder to a greeting'}  name="HookButton  the Benjamin" value="Ugh" style={{color: 'red'}} ref={buttonInput} onClick={()=>{textInput.current.placeholder = 'Hello'}} >Change placeholder to 'Hello'</HookButton >
        <br /> 
        </>
    );
  }



export default Ref

// add refs to each page object, when a tab is clicked, scroll to that ref?