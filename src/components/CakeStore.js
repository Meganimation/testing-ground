import React from 'react'
import { useDispatch, useSelector } from 'react-redux';



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

    function toggleEncryption() {
        var x = document.getElementById("pwInput")
        return (x.type === "password") ?  x.type = "text" : x.type = "password"
        }
      

    return (
        
        <div>
          <h2>  Number of cakes: {numOfCakes} </h2>
            <br />
            <button onClick={buyCake}>Buy 1 Cake</button>
            <br />
            <button onClick={sellCake}>Sell 1 Cake</button>
            <br/>
            <br/>
            <br/>


            Password: <input type="password" id="pwInput" />
            <br/>
            <input type="checkbox" onClick={toggleEncryption}/>

<p>Show Password</p> 
        </div>
    )
}
