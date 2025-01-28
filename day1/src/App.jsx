// import React from "react";
// import "./App.css";
// // import Timer from "./component/timer";
// // import Greeting from "./props/props";
// import Props from "./Props/Props";
// import Child1 from "./Props/Props-drilling/Child1";

// function App() {
//   const data = {
//     name: "teja",
//     num: 123456789,
//     email: "example2223@gmail.com",
//   };
//   return (
//     <div>
//       <Props data={data} />
//     </div>
//   );
// }

///multiple data entries using Context -API

// import React, { createContext } from "react";
// import Childa from "./component/context-API/Childa";

// // create --> createContext
// // Provider --> createProvider
// //Consumer --> ContextCosumer
// const data = createContext();
// const data1 = createContext();
// const data2 = createContext();
// function App() {
//   const name = "Aravind";
//   const age = 25;
//   const gender = "male";

//   return (
//     <div>
//       <data.Provider value={name}>
//         <data1.Provider value={age}>
//           <data2.Provider value={gender}>
//             <Childa />
//           </data2.Provider>
//         </data1.Provider>
//       </data.Provider>
//     </div>
//   );
// }

// export default App;
// export { data, data1, data2 };

// same above code using Context -HOOK

// import React, { createContext } from "react";
// import Childa from "./component/context-API,,Hooks/Childa";

// // create --> createContext
// // Provider --> createProvider
// //Consumer --> ContextCosumer
// const data = createContext();
// const data1 = createContext();
// const data2 = createContext();
// function App() {
//   const name = "Aravind";
//   const age = 25;
//   const gender = "male";

//   return (
//     <div>
//       <data.Provider value={name}>
//         <data1.Provider value={age}>
//           <data2.Provider value={gender}>
//             <Childa />
//           </data2.Provider>
//         </data1.Provider>
//       </data.Provider>
//     </div>
//   );
// }

// export default App;
// export { data, data1, data2 };

//  USE_MEMO
// import React from "react";
// // import Use from "../component./useMemo";
// import Use from "../src/component/USE-MEMO/Use";

// function App() {
//   return (
//     // <div>App</div>
//     // <Use />
//     <Use />
//   );
// }

// export default App;

// REACT - MEMO;

// import React, { useState } from "react";
// import Reactmemo from "./component/REAT-MEMO/Reactmemo";

// function App() {
//   const [add, setAdd] = useState(0);
//   return (
//     <div>
//       <Reactmemo />
//       <h1>
//         hello am using react-memo
//         <br />
//         <span>{add}</span>
//       </h1>
//       <button onClick={() => setAdd(add + 1)}>Addition</button>
//     </div>
//   );
// }

// export default App;

// adding props to child component then it becomes impure component to over-come it we use (useCallback )

// import React, { useCallback, useState } from "react";
// import Reactmemo from "./component/REAT-MEMO/Reactmemo";

// function App() {
//   const [add, setAdd] = useState(0);
//   const learning = useCallback(() => {}, []);
//   const details = {
//     name: "teja",
//     age: 22222,
//     mobile: 687468746875,
//   };
//   return (
//     <div>
//       <Reactmemo learning={learning} />
//       <h1>
//         hello am using react-memo
//         <br />
//         <span>{add}</span>
//       </h1>
//       <button onClick={() => setAdd(add + 1)}>Addition</button>
//       <br />
//     </div>
//   );
// }

// export default App;

// Controlled - Form;
import React from "react";
import Controledform from "./component/controledform/Controledform";

function App() {
  return (
    <div>
      <Controledform />
    </div>
  );
}

export default App;

// use-ref
// import React from "react";
// import Useref from "./component/useref/Use-ref";

// function App() {
//   return (
//     <div>
//       <Useref />
//     </div>
//   );
// }

// export default App;

// undcontrolled form
// import React from "react";
// import Uncontrolled from "./component/UncontrolledForm/Uncontrolled";

// function App() {
//   return (
//     <div>
//       <Uncontrolled />
//     </div>
//   );
// }

// export default App;
