import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HookButton from './hookButton'


function Form(){
   
const dispatch = useDispatch()
const [currentName, setName] = useState('Enter Name')
const name = useSelector(state => state.name)

        return (
            <>
            <br/>
  <p>Name: {name}</p>
  <br />  <br />
  <input type='name' value={currentName} onChange={e => setName(e.target.value)} />
  <br />  <br />  <br />
  <HookButton text={'change name'} onClick={()=> dispatch({type: "CHANGENAME", payload: currentName})}> Change Name </HookButton>
            </>
        )
    }

export default Form