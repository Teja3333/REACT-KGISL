import React from "react";
import { data } from "../../App";

function Childc() {
  return (
    <div>
      <data.Consumer>
        {(name) => {
          return <h1>My name is {name}</h1>;
        }}
      </data.Consumer>
    </div>
  );
}

export default Childc;

//multiple data entries using Context-Api
// import React from "react";
// import { data, data1, data2 } from "../../App"; // importing data from App.jsx

// function Childc() {
//   return (
//     <div>
//       <data.Consumer>
//         {(name) => {
//           return (
//             <data1.Consumer>
//               {(age) => {
//                 return (
//                   <data2.Consumer>
//                     {(gender) => {
//                       return (
//                         <h1>
//                           My name is {name} and I am a {gender}. I am {age}{" "}
//                           years old.
//                         </h1>
//                       );
//                     }}
//                   </data2.Consumer>
//                 );
//               }}
//             </data1.Consumer>
//           );
//         }}
//       </data.Consumer>
//     </div>
//   );
// }

// export default Childc;

// SAME ABOVE CODE USING CONTEXT-HOOK
import React, { useContext } from "react";
import { data, data1, data2 } from "../../App";

function Childc() {
  const name = useContext(data);
  const age = useContext(data1);
  const gender = useContext(data2);

  return (
    <div>
      <h1>
        My name is {name} and I am a {gender}. I am {age} years old.
      </h1>
    </div>
  );
}

export default Childc;
