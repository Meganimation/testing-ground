
import React, { useState, useEffect } from "react";
import {useFetch} from './useFetch'



export const About = () => {

  

   
   const [state, setState] = useState(['rrrrrrrr'])

   useEffect(() => {
   fetch('http://localhost:3000/notes')
   .then(x => x.json())
   .then(y => {
       setState({data: y})
   });
}, ['http://localhost:3000/notes']);

        
const printData=(e)=>{
    e.target.innerText = (state.data.map((data) => {
    return (data.name + data.genre)
    }))}
    


    return (
        
        <>
     


        <div>
            Select an algorithm:
            <br />
   
    <button onClick={printData}>ddd</button> 
           
        </div>
        </>
    )
}
