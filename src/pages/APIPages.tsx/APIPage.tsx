import React, {useState} from 'react'
import { createGlobalStyle, css, keyframes } from "styled-components";
import styled from "styled-components";
import InfiniteScrollComponent from './InfiniteScrollComponent';
import InfiniteScrollComponentTwo from './InfiniteScrollComponentTwo';


const GlobalStyle = createGlobalStyle`
  body {
    font-family: monospace;
    color: darkGreen;
  }
  h1  {
    font-family: monospace;
    color: darkGreen;
    }

    a {
      color: white;
    }
`;


const APIPageWrapper = styled.div`
background-color: #2d2d2d;
`


function APIPage() {

    const [showInfiniteScrollOne, setShowInfiniteScrollOne] = useState(false);
    const [showInfiniteScrollTwo, setShowInfiniteScrollTwo] = useState(false);

    const handleExit = (page: string) => {
    switch (page) {
        case 'cssTips':
            setShowInfiniteScrollOne(false);
            break;
        default:
            break;
    }
    }

    return (
        <APIPageWrapper>
            <>
            This is the API Page! Click a button below:
            </>
            <button onClick={() => setShowInfiniteScrollOne(!showInfiniteScrollOne)}> Infinite Scroll Example #1</button>
            <button onClick={() => setShowInfiniteScrollTwo(!showInfiniteScrollTwo)}> Infinite Scroll Example #2</button>

            {showInfiniteScrollOne && <InfiniteScrollComponent handleExit={handleExit}/>}
            {showInfiniteScrollTwo && <InfiniteScrollComponentTwo handleExit={handleExit}/>}

      <GlobalStyle />
        </APIPageWrapper>
    )
}

export default APIPage