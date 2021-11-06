
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Note } from '../components/Notes'
import { useFetch } from "../components/customhooks/useFetch";


const FormBox = styled.div `
  background-color: black; 
  border-color: green;
  width: 300px;
  height: 300px;
  position: absolute;
  top: 5%;
  right: -55%;
  padding-bottom: 40%;
  color: white;

  ul {
    padding: 20px;
  }
  `
  
  
const NoteContainer = styled.div `
  background-color: blue; 
  position: absolute;
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


export const NotesPage = () => {

  const {data, loading} = useFetch('http://localhost:3000/notes')
  const [state, setState] = useState({currentName: '', currentDesc: '', currentCode: '', currentGenre: ''})
  const [searchResults, setSearchResults] = React.useState([])
  const [searchTerm, setSearchTerm] = React.useState("")
  const [formToggle, setFormToggle] = React.useState(false)


  useEffect(() => {
    const results = loading ? '...' : data.filter(data =>
      data.name.includes(searchTerm.toUpperCase())
    );setSearchResults(results);
    // eslint-disable-next-line
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

  const printData=()=>{
    console.log(searchResults)
      return (
        <NoteContainer>
            <Note loading={loading} data={searchResults} />
        </NoteContainer>
        )
    }

    const showForm=()=>{
      if (formToggle === true) {
        return(<FormBox>
          <form>
      <ul>name: <input name='code' value={state.currentName} onChange={e => setState({...state, currentName: e.target.value.toLowerCase()})} /></ul>
      <ul>description: <input name='desc' value={state.currentDesc} onChange={e => setState({...state, currentDesc: e.target.value})}/></ul>
      <ul>code: <textarea  style={{width: '200px', height: '400px', textAlign: 'top'}} value={state.currentCode} onChange={e => setState({...state, currentCode: e.target.value})}/></ul>
      <ul>genre: <input name='genre' value={state.currentGenre} onChange={e => setState({...state, currentGenre: e.target.value})}/></ul>
          <button onClick={PostData}> submit </button>
        </form>
      </FormBox>)
      } 
    }
    
    function handleSearchInputChange(e){
        setSearchTerm(e.target.value)
    }


    return (
    <>
      <SearchContainer>
        <h1>Search Notes:</h1>
        <input style={{width: '600px'}} onChange={handleSearchInputChange} value={state.searchTerm}  type="text" placeholder="Search" />
      </SearchContainer>

      <button onClick={()=>setFormToggle(!formToggle)}> Submit a note</button>

      <div>
        {loading ? '...' : printData()} 
      </div>

      <>{showForm()}</>
    </>
    )
}