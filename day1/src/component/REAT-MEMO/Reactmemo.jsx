// import React from "react";

// function childa() {
//   console.log("hii i am child");

//   return (
//     <div>
//       <h1>Hey hii</h1>
//     </div>
//   );
// }

// export default childa;

// using React-memo
//  SInce its a pure component it is working properly
// import { memo } from "react";
// import React from "react";

// function childa() {
//   console.log("hii i am child");

//   return (
//     <div>
//       <h1>Hey hii</h1>
//     </div>
//   );
// }

// export default memo(childa);

import { memo } from "react";
import React from "react";

function childa({ learning }) {
  console.log("hii i am child");

  return (
    <div>
      <h1>
        Hey hii here are my details{learning}
        {/* {details.age}
        {details.mobile} */}
      </h1>
    </div>
  );
}

export default memo(childa);
