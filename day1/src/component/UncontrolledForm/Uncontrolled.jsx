import React, { useRef } from "react";

function Uncontrolled() {
  const nameRef = useRef();
  const mailRef = useRef();
  const passRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(
      `Name:${nameRef.current.value},Email:${mailRef.current.value},Password:${passRef.current.value}`
    );
  }
  return (
    <div>
      <form onClick={handleSubmit}>
        <label>Name</label>
        <input type="text" ref={nameRef} />
        <br />
        <label>Email</label>
        <input type="text" ref={mailRef} />
        <label htmlFor="">Passwprd</label>
        <input type="text" ref={passRef} />
      </form>
    </div>
  );
}

export default Uncontrolled;
