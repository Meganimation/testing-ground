import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import BabyTest from "./BabyTest";

const StyledDiv: any = styled.div`
    font-family: monospace;
    color: darkGreen;
`;


function Test() {

    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1);
    }


    const personObj = [
        {name: "John", desc: "He is a good"},
        {name: "Mary", desc: "She is a good"},
    ]


    const mapPerson = personObj.map((person: any) => {
        return (
     <>
        <div>{person.name}</div>
        <div>{person.name}</div>
    </>
        )
    })






    return(
        <StyledDiv >
            <BabyTest name={'hello'} desc={'desctiption'} count={count} handleCount={handleCount} />
            {mapPerson}
        </StyledDiv>
    )
}

export default Test;