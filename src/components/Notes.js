import React, { useState, useEffect, useRef } from "react";
import {useFetch} from './useFetch'
import styled from 'styled-components';
import HookButton from './hookButton'


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
    position: fixed: 
    top: 100px;
    right: 100px;
    background: green;
    width: 50%    
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

    if (loading.data === '...') {
        return '...' 
    } 

    // data.filter(data =>
    //     data.name.includes(searchTerm.toUpperCase())
    //   )

    function showMore(e, dataName, dataDesc, dataCode){
        debugger
   return e.target.nextSibling.innerText=dataDesc,
   e.target.nextSibling.nextSibling.innerText=dataCode
}

    if (loading.loading === false) {
        return (loading.data.map((data) => {
            const moreData=()=>{
                return (
                    <div >
                   more data here or somewhere where it doesnt
                    </div>
                        )
                    }        
                        
        return (
            <Box>
                <h2>{data.name}</h2>
                <div>
                <>
                {/* <button onClick={()=>{setRevealData(!revealData)}}>{data.name}</button>  */}
                <button onClick={(e)=>{showMore(e, data.name, data.desc, data.code)}}>info</button> 
                <div> hello
                </div>
                <div> hello again
                </div>
                </>
                { !revealData ? <div style={{width: '500px'}}>...</div> : <> {moreData()} </> }
                <button onClick={(e)=>deletePost(e, data.id)}> delete </button>  
                </div> 
            </Box> 
            )}
            ))
        }
    }

return Notes()
}