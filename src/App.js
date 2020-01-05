import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from './components/Form';

const INCREMENT = "INCREMENT"

function App() {

const [number, setNumber] = useState(1)
const dispatch = useDispatch()
const counter = useSelector(state => state.counter)


  return (
    <>
    <h1>helllllo</h1>

    <div className="App">
      <header className="App-header">
  
      <h1>Welcome to the testing ground.</h1>
        <pr> Like a fairground, things break often here.</pr>
      <br />
        <pr> Unike a fairground, you won't die.</pr>
      </header>
    </div>


    <h1>Counter: {counter}</h1> 
    
  <input type='text' value={number} onChange={(e) => setNumber(e.target.value)} />


  <button onClick={()=> dispatch({type: "ANYAMOUNT", info: 'adds the amount entered via input', payload: number})}> add {number} things </button>
  <button onClick={()=> dispatch({type: INCREMENT})}> +1 </button> 
  {/* apparently its better to save type values to a variable? */}
  <button onClick={()=> dispatch({type: "DECREMENT"})}> -1 </button>
  <button onClick={()=> dispatch({type: "DEFAULT", info: 'resets the counter to default'})}> reset </button>

<Form/>
    </>

  );
  
}

export default App;