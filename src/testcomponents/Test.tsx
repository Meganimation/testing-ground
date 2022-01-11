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

    return(
        <StyledDiv >
            
            <BabyTest name={'hello'} desc={'desctiption'} count={count} handleCount={handleCount} />
        </StyledDiv>
    )
}

export default Test;