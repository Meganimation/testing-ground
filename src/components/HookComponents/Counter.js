
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../CustomButton'
import HookHeader from '../hookHeader'
import HookInput from '../hookInput'

const Counter = () => {

    const [number, setNumber] = useState(1)
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const INCREMENT = "INCREMENT"



    return (
<>
    <HookHeader text={`Counter: ${counter}`} />
        <HookInput type='text' value={number} onChange={(e) => setNumber(e.target.value)} />  
    <br />  
    <br />
        <CustomButton text={`add ${number} things`}onClick={()=> dispatch({type: "ANYAMOUNT", info: 'adds the amount entered via input', payload: number})}> add {number} things </CustomButton>
    <br />
    <br />
        <CustomButton text={'+1'} onClick={()=> dispatch({type: INCREMENT})}> +1 </CustomButton> 
        <CustomButton text={'-1'} onClick={()=> dispatch({type: "DECREMENT"})}> -1 </CustomButton>
    <br /> 
    <br />
    <CustomButton text={'reset'} onClick={()=> dispatch({type: "DEFAULT", info: 'resets the counter to default'})}> reset </CustomButton>

</>)
}

export default Counter