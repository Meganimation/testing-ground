import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../CustomButton";
import HookHeader from "../hookHeader";

function Form() {
  const dispatch = useDispatch();
  const [currentName, setName] = useState("Enter Name");
  const name = useSelector((state) => state.name);

  return (
    <>
      <br />
      <HookHeader text={`name: ${name}`} />
      <br />
      <br />
      <input
        style={{
          padding: "0px",
          borderColor: "green",
          backgroundColor: "black",
          color: "green",
        }}
        type="name"
        value={currentName}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <br />
      <CustomButton
        text={"change name"}
        onClick={() => dispatch({ type: "CHANGENAME", payload: currentName })}
      >
        Change Name
      </CustomButton>
    </>
  );
}

export default Form;
