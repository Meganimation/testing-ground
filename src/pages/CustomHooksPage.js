import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useFetch } from "../components/customhooks/useFetch";
import useToggle from "../components/customhooks/useToggle";
import useTimeout from "../components/customhooks/useTimeout";
import useDebounce from "../components/customhooks/useDebounce";

const Section = styled.section`
z-index: -1;
position: absolute;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

  padding: 20 px;
  position: absolute;
  background: black;
  width: 70em;
  top: -5em;
  left: -1em;

      button {
        background: black
        color: white;
        border: 1px dashed white;
        padding: 10px;
        margin: 10px;
        &:hover {
            border: 1px dotted white;
        }
    }  
`;

const CustomHookWrapperContainer = styled.section`
  display: flex;
  background: black;
  border: 1px dotted darkGreen;

  position: absolute;
  width: 80vw;
  justify-content: center;
`;

const CustomHookWrapper = styled.div`   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin: 20px;

    button {
        background: darkGreen;
        color: white
        border: none;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        width: 100px;
        font-size: 1em;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
            background: green;
        }
    }
`;


const URL =
  "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0";


export default function CustomHooksPage({
  setToggleCustomHookComponent,
  ...props
}) {
  const [state, setState] = useState({
    showUseFetch: false,
    showUseArray: false,
    showUseToggle: false,
    showUseTimeout: false,
    showUseDebounce: false,
  });

  function revealHook() {
    //List of hooks below
    const Fetch = ({ ...props }) => {
      const { data, loading } = useFetch(URL);

      useEffect(() => {}, [data]);

      if (loading) return <div>loading...</div>;

      return (
        <CustomHookWrapper>
          <div>This is the useFetch hook</div>

          <div> currentData: {!data ? "no data" : "data!"}</div>
          <button
            onClick={() => {
              console.log(data);
            }}
          >
            console log Data
          </button>
        </CustomHookWrapper>
      );
    };

    const Array = ({ ...props }) => {
      return (
        <CustomHookWrapper>
          <div>This is the useArray hook</div>
        </CustomHookWrapper>
      );
    };

    const Toggle = ({ ...props }) => {
      const [value, toggleValue] = useToggle(false);

      return (
        <CustomHookWrapper>
          <h3> Current Bool: {value.toString()}</h3>
          <button onClick={toggleValue}>Toggle</button>
          <button onClick={() => toggleValue(true)}>Make True</button>
          <button onClick={() => toggleValue(false)}>Make False</button>
        </CustomHookWrapper>
      );
    };

    function TimeoutComponent() {
      const [count, setCount] = useState(10)
      const { clear, reset } = useTimeout(() => setCount(0), 1000)
    
      return (
        <CustomHookWrapper>
          <div>{count}</div>
          <button onClick={() => setCount(c => c + 1)}>Increment</button>
          <button onClick={clear}>Clear Timeout</button>
          <button onClick={reset}>Reset Timeout</button>
        </CustomHookWrapper>
      )
    }


 function DebounceComponent() {
  const [count, setCount] = useState(10)
  const [seconds, setSeconds] = useState(300)
  useDebounce(() => alert(count), seconds, [count])

  return (
    <CustomHookWrapper>
      <h3>A hook that debounces a function, you can modify this in state. There is {seconds} milliseconds in state (needs the useTimeout custom hook)</h3> 
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment something pointless</button>
      <button onClick={() => setSeconds(5000)}>change to 5 seconds instead</button>
 
    </CustomHookWrapper>
  )
 }

    //Conditionals to check which hook to show

    function backButton(component, hook) {
      let localHook = () => {
        switch (hook) {
          case "showUseFetch":
            return setState({ showUseFetch: false });
          case "showUseArray":
            return setState({ showUseArray: false });
          case "showUseToggle":
            return setState({ showUseToggle: false });
            case "showUseTimeout":
              return setState({ showUseTimeout: false });
              case "showUseDebounce":
                return setState({ showUseDebounce: false });
          default:
            return null;
        }
      };

      return (
        <>
          {component}
          <Section>
            <button
              onClick={() => {
                localHook();
              }}
            >
              go back
            </button>
          </Section>
        </>
      );
    }

    if (state.showUseFetch) return backButton(<Fetch />, "showUseFetch");

    if (state.showUseArray) return backButton(<Array />, "showUseArray");

    if (state.showUseToggle) return backButton(<Toggle />, "showUseToggle");

    if (state.showUseTimeout) return backButton(<TimeoutComponent />, "showUseTimeout");
    if (state.showUseDebounce) return backButton(<DebounceComponent />, "showUseDebounce");
  }

  return (
    <>
      <Section>
        <div>Click a button below to show the hook in action.</div>

        <button
          onClick={() => {
            setState({ showUseFetch: true });
          }}
        >
          useFetch
        </button>

        <button
          onClick={() => {
            setState({ showUseToggle: true });
          }}
        >
          useToggle
        </button>

        <button
          onClick={() => {
            setState({ showUseArray: true });
          }}
        >
          useArray
        </button>

        <button
          onClick={() => {
            setState({ showUseTimeout: true });
          }}
        >
          useTimeout
        </button>

        <button
          onClick={() => {
            setState({ showUseDebounce: true });
          }}
        >
          useDebounce
        </button>

        <button
          onClick={() => {
            setToggleCustomHookComponent(true);
          }}
        >
          go back
        </button>
      </Section>
      <CustomHookWrapperContainer>{revealHook()} </CustomHookWrapperContainer>
    </>
  );
}
