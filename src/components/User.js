import React,{useRef, useEffect} from 'react'
import {useParams, useLocation, useHistory} from 'react-router'

export const User = () => {
    
    const {firstname, lastname} = useParams()
    const location = useLocation()
    const history = useHistory()

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const submitRef = useRef()

    console.log(location)


    useEffect(()=>{
        firstNameRef.current.focus()
    }, []);


    function firstKeyDown(e) {
        if (e.key === "Enter")
        {
            lastNameRef.current.focus()
        }

    }


    function lastKeyDown(e) {
        if (e.key === "Enter")
        {
            submitRef.current.focus()
        }

    }


    function submitKeyDown() {

    }

    return (
        
        <div>
             <br />
             <br />
             <br />
             <br />
             <h2> Create User</h2>
             <br />
             <input ref={firstNameRef} onKeyDown={firstKeyDown} type='text' placeholder='first name'/>
             <br />
             <input ref={lastNameRef} onKeyDown={lastKeyDown}  type='text' placeholder='last name' />
             <br />
             <button ref={submitRef} onKeyDown={submitKeyDown}  >Submit</button>
            This is the user page, who's name is {firstname} {lastname}.
            <br />
            This is done by using the useParams hook
            <br /> which requires the set path to include a :variable. Check out the router in app for more. 

            <br />
          Location info: check the console.
          History infor: check the console.
          <br />
          <button onClick={()=>{history.goBack()}}>Go back</button>
        </div>
    )
}
