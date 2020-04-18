import React, { useState, useEffect } from "react";
import {useFetch} from './useFetch'


export const Note = (data, props) => {
    


return (<div >
    < br/>  < br/>  < br/>
<h2 >{data.name}</h2>
<br/>
<small>Genre: {data.genre}</small>
<br/>
<li>{data.desc}</li>
<br/>
<code>{data.code}</code>
</div>)
}