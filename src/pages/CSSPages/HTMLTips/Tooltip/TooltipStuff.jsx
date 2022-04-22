import React, { useState } from "react";
import Portal from "./Portal";
import styled from "styled-components";

const StyledToolTip = styled.span`
  position: fixed;
  top: 100px;
  left: 100px;
  font-size: 20px;
  background-color: white;
  pointer-events: none;
  padding: 10px;
  border-radius: 5px;
  z-index: 99999;
  display: inline-block;
  white-space: nowrap;
  opacity: ${(props) => props.show};
`;

function TooltipStuff({ text, children, ...props }) {
  const handleMOver = () => setShow(1);
  const handleMOut = () => setShow(0);

  const [show, setShow] = useState(0);
  return (
    <>
      {React.cloneElement(children, {
        onMouseOver: handleMOver,
        onMouseOut: handleMOut,
      })}
      <Portal>
        <StyledToolTip show={show}>{text}</StyledToolTip>
      </Portal>
    </>
  );
}

export default TooltipStuff;
