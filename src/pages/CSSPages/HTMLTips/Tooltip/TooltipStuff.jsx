import React, { useState, useRef } from "react";
import Portal from "./Portal";
import styled from "styled-components";

//video to follow: https://www.youtube.com/watch?v=bnuw7pqWUGA&t=3601s

const StyledToolTip = styled.span`
  position: fixed;
  top: ${(props) => props.posRef.current.y}px;
  left: ${(props) => props.posRef.current.x}px;
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

const getPoint = (el, tt, placement, space) => {
  const pt = { x: 0, y: 0 };
  const elRect = el.getBoundingClientRect();

  switch (placement) {
    case "left":
      pt.x = elRect.left - (tt.offsetWidth + space);
      pt.y = elRect.top + el.offsetHeight - tt.offsetHeight / 2;
      break;
      case "right":
        pt.x = elRect.right + space;
        pt.y = elRect.top + el.offsetHeight - tt.offsetHeight / 2;
        break;
        case "top":
          pt.x = elRect.left + (el.offsetWidth - tt.offsetWidth) / 2;
          pt.y = elRect.top - (tt.offsetHeight + space);
          break;
    case "bottom":
    default:
      pt.x = elRect.left + (el.offsetWidth - tt.offsetWidth) / 2;
      pt.y = elRect.bottom + space;
  }

  return pt;
};

function TooltipStuff({
  text,
  placement = "top",
  space = 15,
  children,
  ...props
}) {
  const handleMOver = (e) => {
    setShow(1);
    posRef.current = getPoint(
      e.currentTarget,
      tooltipRef.current,
      placement,
      space
    );
  };
  const handleMOut = () => setShow(0);

  const [show, setShow] = useState(0);
  const posRef = useRef({ x: 0, y: 0 });
  const tooltipRef = useRef();

  return (
    <>
      {React.cloneElement(children, {
        onMouseOver: handleMOver,
        onMouseOut: handleMOut,
      })}
      <Portal>
        <StyledToolTip ref={tooltipRef} posRef={posRef} show={show}>
          {text}
        </StyledToolTip>
      </Portal>
    </>
  );
}

export default TooltipStuff;
