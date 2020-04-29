
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {Note} from './Notes'
import { useFetch } from "./useFetch";


const Box = styled.div `
  background-color: black; 
  border-color: green;
  width: 300px;
  height: 400px;
  position: absolute;
  left: 900px;
  top: 5%;
  padding: 40px;
  color: white;
  `
  
  
const NoteContainer = styled.div `
  background-color: black; 
  padding-top: 30px;
  color: white;
  max-width: 600px;
  `
  
  
const SearchContainer = styled.div `
  background-color: black; 
  width: 600px;
  display: center;
  color: white;
  z-index: 9;
  `


export const About = () => {

  const counter = useSelector(state => state.name)
  const name = useSelector(state => state.counter)
  const {data, loading} = useFetch('http://localhost:3000/notes')
  const [state, setState] = useState({currentName: '', currentDesc: '', currentCode: '', currentGenre: ''})
  const [searchResults, setSearchResults] = React.useState([])
  const [searchTerm, setSearchTerm] = React.useState("")


  useEffect(() => {
    const results = loading ? '...' : data.filter(data =>
      data.name.includes(searchTerm.toUpperCase())
    );setSearchResults(results);
  }, [searchTerm]);


  function PostData(){
    fetch('http://localhost:3000/notes', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: state.currentName.toUpperCase(),
              desc: state.currentDesc,
              code: state.currentCode,
              genre: state.currentGenre
          })
        })
          .then(console.log(state.name))
        return null 
      }

        //    <div>
        //  {data.map((data)=>{
        // return (
        //     <div> hello {name} + {counter} + {data.id}
        // <Card>
  
        //     <Note  id={data.id} name={data.name} desc={data.desc} code={data.code} genre={data.genre} />
        // </Card>
        //     </div>)})}

  const printData=()=>{
    console.log(searchResults)
      return (
        <NoteContainer>
            <Note loading={loading} data={searchResults} />
        </NoteContainer>
        )
    }
    
    function handleChange(e){
        setSearchTerm(e.target.value)
    }


    return (
    <>
      <SearchContainer>
            Search Notes:
        <br />
        <br />
      <input style={{width: '600px'}}onChange={handleChange} value={state.searchTerm}  type="text" placeholder="Search" />
      </SearchContainer>

      <Box>
        <form>
          <h1> Submit a note</h1>
      <p>name: <input value='name' value={state.currentName} onChange={e => setState({...state, currentName: e.target.value.toLowerCase()})} /></p>
      <p>description: <input value='desc' value={state.currentDesc} onChange={e => setState({...state, currentDesc: e.target.value})}/></p>
      <p>code: <input value='code' value={state.currentCode} onChange={e => setState({...state, currentCode: e.target.value})}/></p>
      <p>genre: <input value='genre' value={state.currentGenre} onChange={e => setState({...state, currentGenre: e.target.value})}/></p>
          <button onClick={PostData}> submit </button>
        </form>
      </Box>
          <div>
            {loading ? '...' : printData()} 
          </div>
        </>
    )
}