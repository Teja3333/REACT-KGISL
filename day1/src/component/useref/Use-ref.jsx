import React, { useState, useRef } from "react";

function Useref() {
  const [name, setName] = useState("don");
  const refElement = useRef();
  console.log(refElement);
  function Reset() {
    setName("");
    refElement.current.focus();
  }
  function handleChange(e) {
    refElement.current.style.color = "red";
    refElement.current.style.color = "teja";
  }

  return (
    <div>
      <h1>Learning UseRef</h1>
      <input
        ref={refElement}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* <button onClick={handleChange}>Reset</button> */}
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default Useref;
