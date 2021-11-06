import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../CustomButton'
import HookHeader from '../hookHeader'

export default function CakeStore() {

    const dispatch = useDispatch()
    const numOfCakes = useSelector(state => state.numOfCakes)

    function buyCake() {
    if (numOfCakes <= 0) {
        alert("There's no more cakes left! Soz m8!")
    }
    else
        dispatch({type: "BUY_CAKE"})
    }


    function sellCake() {
        dispatch({type: "SELL_CAKE"})
    }

    return (
        <>
        <HookHeader text={`Number of Cakes: ${numOfCakes}`}>  Number of Cakes: {numOfCakes} </HookHeader>
            <br />
            < CustomButton  text={'buy 1 cake'} onClick={buyCake} />
            <br />
            < CustomButton  text={'sell 1 cake'} onClick={sellCake}>Sell 1 Cake</CustomButton >
            <br/>
            <br/>
            <br/>
        </>
    )
}
