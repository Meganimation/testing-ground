
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HookButton from './hookButton'
import HookHeader from './hookHeader'
import HookInput from './hookInput'



const Counter = () => {
    const [number, setNumber] = useState(1)
const dispatch = useDispatch()
const counter = useSelector(state => state.counter)
const INCREMENT = "INCREMENT"


    return (
<>
    <HookHeader text={`Counter: ${counter}`} />
  <HookInput type='text' value={number} onChange={(e) => setNumber(e.target.value)} />  <br />  <br />
  <HookButton text={`add ${number} things`}onClick={()=> dispatch({type: "ANYAMOUNT", info: 'adds the amount entered via input', payload: number})}> add {number} things </HookButton>
  <br />  <br />
  <HookButton text={'+1'} onClick={()=> dispatch({type: INCREMENT})}> +1 </HookButton> 

  {/* apparently its better to save type values to a variable? */}
  <HookButton text={'-1'} onClick={()=> dispatch({type: "DECREMENT"})}> -1 </HookButton>
  <br />  <br />
  <HookButton text={'reset'} onClick={()=> dispatch({type: "DEFAULT", info: 'resets the counter to default'})}> reset </HookButton>
</>)
}

export default Counter