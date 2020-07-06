import React, { useState, useEffect, useRef } from "react";
import {useFetch} from './useFetch'
import styled from 'styled-components';
import HookButton from './hookButton'


export const Note = (loading, data, searchResults, props) => {

    const Code = styled.div `
    font-family: arial;
`

  const flipCardInner = styled.div `
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  &&:hover {
    transform: rotateY(180deg);
  }
  `

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

    const showCode=(code)=>{
let splitCode = code.split('  ')
    

debugger
return splitCode.map((code) => {
    return <p style={{textAlign: 'center'}}>{code}</p>   
        }
    ) 
}

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
                <div>
                <>
                {/* <button onClick={()=>{setRevealData(!revealData)}}>{data.name}</button>  */}
                
              

                <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <h2>{data.name}</h2>
    </div>
    <div className="flip-card-back">
    <h2>{data.name}</h2>
        <i>{data.desc}</i>
        <br />
        <br />
        <Code>
        {showCode(data.code)}
        </Code>
        < br />
        <button onClick={(e)=>deletePost(e, data.id)}> delete </button>  
    </div>
  </div>
</div>


              
                </>
                {/* { !revealData ? <div style={{width: '500px'}}>...</div> : <> {moreData()} </> } */}
    
                </div> 
            </Box> 
            )}
            ))
        }
    }

return Notes()
}