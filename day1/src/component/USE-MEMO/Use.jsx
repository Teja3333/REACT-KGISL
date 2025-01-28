import React, { useMemo, useState } from "react";

function Use() {
  const [add, setAdd] = useState(0); // 0 belongs to add and (add is variable )and setAdd is function
  const [minus, setMinus] = useState(100);
  const [division, setDivide] = useState(200);
  const multply = useMemo(
    //usememo is the cache the result calculation between  re-renders
    function multply() {
      console.log("++++++++++++");
    },
    [add, minus, division] // what ever we pass in the []are called dependance data r value
  );
  return (
    <div>
      <h1>Learning useMemo hook</h1>
      <button onClick={() => setAdd(add + 1)}>Add</button>
      <span>{add}</span>
      <br />
      <button onClick={() => setMinus(minus - 1)}>Minus</button>
      <span>{minus}</span>
      <br />
      <button onClick={() => setDivide(division / 2)}>Divide</button>
      <span>{division}</span>
      <br />
    </div>
  );
}

export default Use;
