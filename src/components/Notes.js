import React, { useState, useEffect } from "react";
import {useFetch} from './useFetch'
import styled from 'styled-components';
import HookButton from './hookButton'



const NoteBox = styled.div`
border: 5px dotted white;
`
export const Note = (loading, data, searchResults, props) => {
    
    const Box = styled.div `
    background-color: black; 

    &:hover {
        border: 3px solid green;
    }
    padding: 20px;
    border: 2px dotted darkGreen;
    position: absolute: 


    `

       
    const Data = styled.div `
    padding: 20px;
    position: absolute: 
    width: 50%    
    `
    
    function deletePost(e, data){
        debugger
        var answer = window.confirm('are you sure?')
        if (answer) {
           
        fetch(`http://localhost:3000/notes/${data}`, {
            method: 'DELETE', 
            headers: {
            'Content-Type': 'application/json',
            },
        })
            .then(resp => resp.json)
            .then(e.target.innerText = 'Deleted')
            .then(e.target.style.color = 'red')
    }}

    const [revealData, setRevealData] = React.useState(false)

   const Notes = () => {

    if (loading.data === '...') {
        return '...' } 
        if (loading.loading === false) {
  
            return (loading.data.map((data) => {
                
                const moreData=()=>{
           
                    return (
                    <Data>
                        <small>{data.genre}</small>
                        <br />
                        <i>{data.desc}</i>
                        <br />
                        <code>{data.code}</code>
                        <br />
                        <button onClick={(e)=>deletePost(e, data.id)}> delete </button>  
                    </Data>)
                        }
                    
                
                return (
                <Box>
            <div>
            <button onClick={()=>{setRevealData(!revealData)}}>{data.name}</button>
            <>
            {!revealData ? <div style={{width: '500px'}}>...</div> : moreData()}
            </>
            
            </div> 
            </Box> 
            )}
            ))
        }
    }

return Notes()
}