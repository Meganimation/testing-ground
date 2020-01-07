import React from 'react';


export default function Password() {
    return (<>
        <input type="password" id="pwInput" />
        <input type="checkbox" onClick={(toggleEncryption)}/>
      </>)
}

function toggleEncryption() {
    var x = document.getElementById("pwInput")
    return (x.type === "password") ?  x.type = "text" : x.type = "password"
    }
  

//upload this and test.stories, try to mimic input css
  