import React from "react";
import LegendWithSearchableDropDown from "./HTMLTips/LegendWithSearchableDropDown";

function CSSTips(props: ICSSTipsProps) {
  return (
    <div>
      <button onClick={() => props.handleExit("cssTips")}> Exit </button>
      <h1>CSS and HTML Tips!</h1>

      <p>Did you know? There's an input type for Color! <input type="color"/></p>

      <p>What about the time? There's an input type for Time! <input type="time"/></p>

      <p> You can use<sub>sub</sub> and <sup>sup</sup> to create small text for things like H<sub>2</sub>O</p>

      <p> You can also use a progress bar html tag (Set it a value and max value, otherwise it will do a standard crappy animation): <progress value='50' max='90' /></p>
      <LegendWithSearchableDropDown/>


    </div>
  );
}

interface ICSSTipsProps {
  handleExit: (page: string) => void;
}

export default CSSTips;
