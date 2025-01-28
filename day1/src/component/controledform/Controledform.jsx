// // import React, { useState } from "react";

// // function Controledform() {
// //   const [name, setName] = useState("");
// //   const [Password, setPassword] = useState("");
// //   const handleChange = (e) => {
// //     console.log(e.target.name); //here it ill show which input we are typing
// //     setName(e.target.value); // value is (attribute) here setName is called to do visibility of typed Password
// //   };

// //   function handlePassword(e) {
// //     console.log(e.target.value);
// //     setPassword(e.target.value); //here setPassword is called to do visibility of typed Password
// //   }

// //   return (
// //     <>
// //       <form>
// //         <label>firstname</label>
// //         <br />
// //         <input
// //           type="text"
// //           name="firstname"
// //           onChange={handleChange}
// //           //value="teja" //here if we use defaultvalue the then we can edit the input name\
// //           value={name}
// //         />
// //         <br />
// //         <label>Password</label>
// //         <br />
// //         <input
// //           type="text"
// //           name="password"
// //           onChange={handlePassword}
// //           value={Password}
// //         />
// //       </form>
// //     </>
// //   );
// // }

// // export default Controledform;

// // IN above code we had used function for every input to over come we use (if and else )
// import React, { useState } from "react";

// function Controledform() {
//   const [name, setName] = useState("");
//   const [Password, setPassword] = useState("");

//   const handleChange = (e) => {
//     console.log(e.target.name); //here it ill show which input we are typing
//     setName(e.target.value); // value is (attribute) here setName is called to do visibility of typed Password
//     if (e.target.name == "firstname") {
//       const capsName = e.target.value.toUpperCase();
//       setName(capsName);
//     } else {
//       const pswd = e.target.value.toUpperCase();
//       setPassword(pswd);
//     }
//   };

//   return (
//     <>
//       <form>
//         <label>firstname</label>
//         <br />
//         <input
//           type="text"
//           name="firstname"
//           onChange={handleChange}
//           //value="teja" //here if we use defaultvalue the then we can edit the input name\
//           value={name}
//         />
//         <br />
//         <label>Password</label>
//         <br />
//         <input
//           type="text"
//           name="password"
//           onChange={handleChange}
//           value={Password}
//         />
//       </form>
//     </>
//   );
// }

// export default Controledform;

// one more example
import React, { useState } from "react";

function Controledform() {
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`name:${name},mail:${mail},pass:${pass}`);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="">Mail</label>
        <input
          type="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Controledform;
