import React from "react";
import styled from "styled-components";

const LegendContent = styled.div`
s
`;

function Legend() {
  return (
    <LegendContent>
      This shows you how to make an easy drop down menu which can be searched!
      <form>
        <fieldset>
          <legend>Legend</legend>

          <div>
            <label>color</label>
          </div>

          <input list="colors" placeholder="Text Input" />
          <datalist id="colors">
            <option value="red" />
            <option value="green" />
            <option value="blue" />
          </datalist>
        </fieldset>
      </form>
    </LegendContent>
  );
}

export default Legend;
