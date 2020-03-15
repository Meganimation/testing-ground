import React, { Component, useLayoutEffect, useRef } from "react";

const UseLayout=()=> {

    const title = useRef();

    useLayoutEffect(()=>{
  console.log(title.current.getBoundingClientRect());
}, [])

    return (
      <>
      <h3 ref={title}> This is the UseLayout component!</h3>
      <p>Check the console to see the current positioning of the above title, it's a ref.</p>
      </>
    );
  }



export default UseLayout;

// add refs to each page object, when a tab is clicked, scroll to that ref?