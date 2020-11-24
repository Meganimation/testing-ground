import React, { useState, useEffect, useRef } from "react";
import {useFetch} from './useFetch'
import styled from 'styled-components';
import HookButton from './hookButton'


export const Note = (loading, data, searchResults, props) => {

const CodeWrapper = styled.div `
  font-family: arial;
  color: red;
`

const NoteBox = styled.div `
  background-color: black; 
  margin-top: 40px;
  &:hover {
      border: 3px solid green;
  }
  padding: 20px;
  border: 2px dotted darkGreen;
  position: absolute: 
`
    
    function deletePost(e, data){
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
        }
    }


const Notes = () => {

    const [revealData, setRevealData] = useState(true)
    const showCode=(code)=>{
        let splitCode = code.split('  ')
        return splitCode.map((code) => {
            return <p style={{textAlign: 'center'}}>{code}</p>   
            })  
        }

    if (loading.data === '...') {
        return '...' 
    }     
    if (loading.loading === false) {
        return (loading.data.map((data) => {                        
        return (
            <NoteBox>
                <div className="flip-card">
                <div className="flip-card-inner">
                <div className="flip-card-front">
                    <h2>{data.name}</h2>
                </div>
                <div className="flip-card-back">
                    <h2>{data.name}</h2>
                    <i>{data.desc}</i>
                    <CodeWrapper>{showCode(data.code)}</CodeWrapper>

                    <button onClick={(e)=>deletePost(e, data.id)}> delete </button>  
                </div>
                </div>
                </div>
                {/* { !revealData ? <div style={{width: '500px'}}>...</div> : <> {moreData()} </> } */}
            </NoteBox> 
            )}
            ))
        }
    }

return Notes()
}