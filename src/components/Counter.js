
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';



const Counter = () => {
    const [number, setNumber] = useState(1)
const dispatch = useDispatch()
const counter = useSelector(state => state.counter)
const INCREMENT = "INCREMENT"


    return (
<>
    <h1>Counter: {counter}</h1> 
  <input type='text' value={number} onChange={(e) => setNumber(e.target.value)} />  <br />  <br />
  <button onClick={()=> dispatch({type: "ANYAMOUNT", info: 'adds the amount entered via input', payload: number})}> add {number} things </button>
  <br />  <br />
  <button onClick={()=> dispatch({type: INCREMENT})}> +1 </button> 

  {/* apparently its better to save type values to a variable? */}
  <button onClick={()=> dispatch({type: "DECREMENT"})}> -1 </button>
  <br />  <br />
  <button onClick={()=> dispatch({type: "DEFAULT", info: 'resets the counter to default'})}> reset </button>
</>)
}

export default Counter