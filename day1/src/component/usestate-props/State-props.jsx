import React from "react";

function Parent() {
  const name = "Teja";
  retur(
    <div>
      <child fromParent="Hello from Paremnt" name={name} />
    </div>
  );
}
function child({ fromParent, name }) {
  const [ownState, setOwnState] = useState("child's Own state");
  return (
    <div>
      <p>Prop from Parent:{fromParent}</p>
      <p>my name is {name}</p>
      <p>Childs's Own state :{ownState}</p>
      <button onClick={() => setOwnState("updated child's state")}>
        upbate state
      </button>
    </div>
  );
}
export default Parent;
