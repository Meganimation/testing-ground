import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useFetch } from "../components/customhooks/useFetch";

const Section = styled.section`
  padding: 20 px;
  position: absolute;
  background: black;
  width: 70em;
  height: 100vh;
  top: -5em;
  left: -1em;
`;


export const Fetch = ({showCustomHook, ...props}) => {

    return(<div>
     HEY
    </div>)
  }

// function Fetch() {
//     const {data, loading} = useFetch('http://localhost:3000/notes')

//     return (<div> fetched</div>)
// }



export default function CustomHooksPage({setToggleCustomHookComponent, ...props}) {

    const [state, setState] = useState({showUseFetch: false})


    const revealHook=(targetedHook)=>{

        // make a switch case function that takes in the targetedHook and returns the correct hook

        switch(targetedHook){
            case "useFetch":
                return setState({showUseFetch: true})
            default:
                return alert('try again!')
    }
}

if (state.showUseFetch) return <Section>
    <Fetch />
    <button onClick={()=>{setState({showUseFetch: false})}}>go back</button>
</Section>


  return <Section>
      <div>Click a button below to show the hook in action.</div>

      <button onClick={()=>{revealHook('useFetch')}}> useFetch </button>

      <button onClick={()=>{setToggleCustomHookComponent(true)}}> go back</button>
  </Section>;
}
