import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Form(){
   
const dispatch = useDispatch()
const [currentName, setName] = useState('Enter Name')
const name = useSelector(state => state.name)

        return (
            <>
            <br/>
  <h1>Name: {name}</h1>
  <input type='name' value={currentName} onChange={e => setName(e.target.value)} />
  <button onClick={()=> dispatch({type: "CHANGENAME", payload: currentName})}> Change Name </button>
            </>
        )
    }

export default Form