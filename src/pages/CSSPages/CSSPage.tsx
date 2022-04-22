import React, {useState} from 'react'
import { createGlobalStyle, css, keyframes } from "styled-components";
import styled from "styled-components";
import CSSTips from './CSSTips';

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


const CSSPageWrapper = styled.div`
background-color: #2d2d2d;
`


function CSSPage() {

    const [showCSSTips, setShowCSSTips] = useState(true);

    const handleExit = (page: string) => {
    switch (page) {
        case 'cssTips':
            setShowCSSTips(false);
            break;
        default:
            break;
    }
    }

    return (
        <CSSPageWrapper>
            <>
            This is the CSS Page! Click a button below:
            </>
            <button onClick={() => setShowCSSTips(!showCSSTips)}> Css (& HTML ) Tips </button>

            {showCSSTips && <CSSTips handleExit={handleExit}/>}

      <GlobalStyle />
        </CSSPageWrapper>
    )
}

export default CSSPage
