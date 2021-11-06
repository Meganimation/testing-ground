import React, { useRef } from "react";
import CustomButton from '../CustomButton'
import HookHeader from '../hookHeader'

 const Ref=()=> {

  let textInput = useRef();
  let buttonInput = useRef();


    return (
      <>
        <HookHeader text={'useRef'}/>
          <input type="text" ref={textInput} placeholder="placeholder text" />
        <br/> 
          <CustomButton text={'console log the ref'}  onClick={()=>{console.log(textInput.current)}}>Console log the ref</CustomButton >
        <br />
          <CustomButton  text={'focus on the ref'}  onClick={()=>{textInput.current.focus()}}>Focus on the ref</CustomButton >
        <br /> 
          <CustomButton  text={'change placeholder to a greeting'}  name="CustomButton  the Benjamin" value="Ugh" style={{color: 'red'}} ref={buttonInput} onClick={()=>{textInput.current.placeholder = 'Hello'}} >Change placeholder to 'Hello'</CustomButton >
        <br /> 
        </>
    );
  }



export default Ref

// add refs to each page object, when a tab is clicked, scroll to that ref?