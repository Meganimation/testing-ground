
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {Note} from './Notes'
import { useFetch } from "./useFetch";


const Box = styled.div `
background-color: black; 

border: 1px dashed;
border-color: green;
width: 300px;
height: 400px;
position: absolute;
left: 900px;
top: 5%;
text-align: center;
display: center;
padding: 40px;
color: white;
`


const Card = styled.div `
  background-color: black; 
  width: 600px;
  text-align: center;
  display: center;
  color: white;
  z-index: 9;
  `

  const CardContainer = styled.div `
  background-color: red; 
  border: 1px dashed;
  border-color: green;
  width: 600px;

  position: absolute;
  left: 10%;
  top: 100%;
  text-align: center;
  display: center;
  padding: 40px;
  color: white;
  z-index: 9;
  `
export const About = () => {

    const name = useSelector(state => state.name)

   const {data, loading} = useFetch('http://localhost:3000/notes')

   const [state, setState] = useState({currentName: '', currentDesc: '', currentCode: '', currentGenre: ''})

        
// const print=(e)=>{
//     e.target.innerText = (state.data.map((data) => {
//     return (data.name + data.genre)
//     }))}

    const printData=()=>{
       return (
           <div>
         {data.map((data)=>{
        return (
            <div> hello {name} + {data.name}
        <Card>
            <Note name={data.name} desc={data.desc} code={data.code} genre={data.genre} />
        </Card>
            </div>)})}
            </div>
            
       )
    }
    
    
    return (
    <>
       
       <div>
            Search Notes:
        <br />
   <input />
        </div>

    <Box >
        <form >
        <h1> Submit a note</h1>
        <p>name: <input value='name' value={state.currentName} onChange={e => setState({currentName: e.target.value})} /></p>
        <p>description: <input value='desc' value={state.currentDesc} onChange={e => setState({currentDesc: e.target.value})}/></p>
        <p>code: <input value='code' value={state.currentCode} onChange={e => setState({currentCode: e.target.value})}/></p>
        <p>genre: <input value='genre' value={state.currentGenre} onChange={e => setState({currentGenre: e.target.value})}/></p>
        <button onClick={()=>{alert(state.currentGenre)}}> submit </button>
        </form>
    </Box >

  
            {loading ? '...' : printData()} 
   
     
        </>
    )
}