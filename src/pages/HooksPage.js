import React, { useState } from "react";
import styled from "styled-components";
import Form from "../components/HookComponents/Form";
import CakeStore from "../components/HookComponents/CakeStore";
import Ref from "../components/HookComponents/Ref";
import Counter from "../components/HookComponents/Counter";
import UseLayout from "../components/HookComponents/UseLayout";
import { css, keyframes } from "styled-components";
import { device } from "../utils/Breakpoints";
import CustomButton from "../components/CustomButton";
import CustomHooksPage from "./CustomHooksPage";

export const HooksPage = () => {
  const [counterVisibility, setCounterVisibility] = useState(false);
  const [cakeStoreVisibility, setCakeStoreVisibility] = useState(false);
  const [refVisibility, setRefVisibility] = useState(false);
  const [formVisibility, setFormVisibility] = useState(false);
  const [useLayoutVisibility, setUseLayoutVisibility] = useState(false);
  const [toggleCustomHookComponent, setToggleCustomHookComponent] =
    useState(true);

    

  const animation = keyframes`
  0% {
    border-color: black;
  }
  100% {
    border-color: darkGreen;
    opacity: 70%;
  }
}
`;

  const animationRule = css`
    ${animation} 5s infinite alternate;
  `;

  const Box = styled.div`
    border: 1px dashed;
    border-color: green;

    height: 400px;
    justify-content: center;
    margin-left: 35%;

    text-align: center;
    display: center;
    padding: 40px;
    color: white;
    z-index: 9;
    animation: ${animationRule};

    @media ${device.mobile} {
      background-color: blue;
      top: 20vh;
      right: 50vh;
      width: 300px;
      height: 400px;
    }

    @media ${device.laptop} {
      background-color: green;
      top: 5vh;
      height: 400px;
    }
  `;

  const HookNavBar = styled.nav`
    background-color: red;


    width: 100%;
    display: ${({ toggleCustomHookComponent }) =>
      toggleCustomHookComponent ? "block" : "none"};

    @media ${device.mobile} {
      background-color: green;
    }

    @media ${device.tablet} {
      background-color: purple;
    }

    @media ${device.laptop} {
      background-color: blue;
    }

    @media ${device.largeDesktop} {
      background-color: lightBlue;
    }
  `;

  const Button = styled.button`
  color: darkGreen;
  font-family: monospace
  font-weight: 900px;
  background: black;
  border-radius: 5%;
  padding: 10px;
  width: 150px;
  height: 70px
  margin: 20px;
  text-align: center;
  display: inline-block;
  border: 2px;
  border-style: dotted;
  border-color: darkGreen;

    &:hover {
      color: green;
      border: 2px;
      border-style: dotted;
      border-color: lightGreen;
    }
  `;

  function hookButton(theState, settingState, name) {
    switch (theState) {
      case counterVisibility:
        return (
          <Button onClick={(e) => settingState(!theState)}>
            {name} {theState ? <p>ON</p> : <p>OFF</p>}{" "}
          </Button>
        );

      case refVisibility:
        return (
          <Button onClick={(e) => settingState(!theState)}>
            {name} {theState ? <p>ON</p> : <p>OFF</p>}{" "}
          </Button>
        );

      case formVisibility:
        return (
          <Button onClick={(e) => settingState(!theState)}>
            {name} {theState ? <p>ON</p> : <p>OFF</p>}{" "}
          </Button>
        );

      case cakeStoreVisibility:
        return (
          <Button onClick={(e) => settingState(!theState)}>
            {name} {theState ? <p>ON</p> : <p>OFF</p>}{" "}
          </Button>
        );

      case useLayoutVisibility:
        return (
          <Button onClick={(e) => settingState(!theState)}>
            {name} {theState ? <p>ON</p> : <p>OFF</p>}{" "}
          </Button>
        );

      default:
        return null;
    }
  }

  const showCustomHook = () => {
    setCounterVisibility(false);
    setRefVisibility(false);
    setFormVisibility(false);
    setCakeStoreVisibility(false);
    setUseLayoutVisibility(false);
    setToggleCustomHookComponent(!toggleCustomHookComponent);
  };

  if (!toggleCustomHookComponent)
    return (
      <>
        <CustomHooksPage showCustomHook={showCustomHook} setToggleCustomHookComponent={setToggleCustomHookComponent}/>
      </>
    );
  else
    return (
      <div>
        <HookNavBar toggleCustomHookComponent={toggleCustomHookComponent}>
          {hookButton(counterVisibility, setCounterVisibility, "Counter")}
          {hookButton(refVisibility, setRefVisibility, "Ref")}
          {hookButton(formVisibility, setFormVisibility, "Form")}
          {hookButton(
            cakeStoreVisibility,
            setCakeStoreVisibility,
            "Cake Store"
          )}
          {hookButton(useLayoutVisibility, setUseLayoutVisibility, "useLayout")}
   

          <>
          {counterVisibility ? (
            <Box>
              <Counter />
            </Box>
          ) : null}
          {formVisibility ? (
            <Box>
              <Form />
            </Box>
          ) : null}
          {cakeStoreVisibility ? (
            <Box>
              <CakeStore />
            </Box>
          ) : null}
          {refVisibility ? (
            <Box>
              <Ref />
            </Box>
          ) : null}
          {useLayoutVisibility ? (
            <Box>
              <UseLayout />
            </Box>
          ) : null}
        </>
        <CustomButton
            onClick={() => {
              showCustomHook();
            }}
          >
            Show Custom Hooks
          </CustomButton>
        </HookNavBar>


      </div>
    );
};
