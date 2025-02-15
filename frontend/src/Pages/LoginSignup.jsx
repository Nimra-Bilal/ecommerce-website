// import React, { useState } from 'react'
// import './CSS/LoginSignup.css'
// const LoginSignup = () => {
//   const [state,setState]=useState("login");
//   const login=async()=>{
// console.log("login function executed");
//   }
//   const signup=async()=>{
//     console.log("signup function executed");
//   }
//   return (
//    <div className="loginsignup">
//     <div className="loginsignup-container">
//       <h1>Sign Up</h1>
//       <div className="loginsignup-fields">
//        {state==="Sign Up"?<input type="text" placeholder='your name' />:<></>} 
//         <input type="email" placeholder='your email' />
//         <input type="password" placeholder='your password' />
//       </div>
//       <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
//       {state==="Sign Up"? <p className="loginsignup-login">
//         Already have an account?<span onClick={()=>{setState("Login")}}> login here.</span>
//       </p>:<p className="loginsignup-login">
//         Create an account?<span onClick={()=>{setState("Sign Up")}}> Click here.</span>
//       </p>}
     
      
//       <div className="loginsignup-agree">
//         <input type="checkbox" name='' id='' />
//         <p>By continuing , I agree to your terms of service and privacy policy </p>
//       </div>
//     </div>
//    </div>
//   )
// }

// export default LoginSignup


// import React, { useState } from 'react';
// import './CSS/LoginSignup.css';

// const LoginSignup = () => {
//   const [state, setState] = useState("login");

//   const login = async () => {
//     console.log("Login function executed",formData);
//   };

//   const signup = async () => {
//     console.log("Signup function executed",formData);
//   };

//   const [formData,setFormData]=useState({
//     username:"",
//     email:"",
//     password:"",
//   })

//   const changeHandler=(e)=>{
//     setFormData({...formData,[e.target.name]:e.target.value})
//   }

//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>{state === "login" ? "Login" : "Sign Up"}</h1>
//         <div className="loginsignup-fields">
//           {state === "signup" && <input type="text" name='username' value={formData.username} onChange={changeHandler} placeholder='Your Name' />}
//           <input type="email" name='email' value={formData.email} onChange={changeHandler} placeholder='Your Email' />
//           <input type="password" name='password' value={formData.password} onChange={changeHandler} placeholder='Your Password' />
//         </div>
//         <button onClick={() => { state === "login" ? login() : signup() }}>
//           Continue
//         </button>

//         {state === "signup" ? (
//           <p className="loginsignup-login">
//             Already have an account?
//             <span onClick={() => setState("login")}> Login here.</span>
//           </p>
//         ) : (
//           <p className="loginsignup-login">
//             Create an account?
//             <span onClick={() => setState("signup")}> Click here.</span>
//           </p>
//         )}

//         <div className="loginsignup-agree">
//           <input type="checkbox" id="agree" />
//           <p>By continuing, I agree to your terms of service and privacy policy.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;


import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import "bootstrap/dist/css/bootstrap.min.css";

const LoginSignup = () => {
  const [state, setState] = useState("login");
  
  // Initializing formData for both login and signup fields
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    agree: false,  // For checkbox state
  });

  // Handle form input changes
  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value }); 
      //for rest of data i.e:name , password , email
    }
  };

  const login = async () => {
    console.log("Login function executed", formData);
      // Ensure required fields match backend expectations
      const requestBody = {
        name: formData.username,  // Backend expects 'name'
        email: formData.email,
        password: formData.password
    };

    try {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),  // Send corrected body
        });

        const responseData = await response.json();

        if (response.ok) {  // Ensure request was successful
            localStorage.setItem('auth-token', responseData.token); //stores token in local storage
            window.location.replace("/");
        } else {
            console.error("Signup failed:", responseData.message);
            alert(responseData.message);
        }
    } catch (error) {
        console.error("Signup error:", error);
    }
  };

  const signup = async () => {
    console.log("Signup function executed", formData);

    // Ensure required fields match backend expectations
    const requestBody = {
        name: formData.username,  // Backend expects 'name'
        email: formData.email,
        password: formData.password
    };

    try {
        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),  // Send corrected body
        });

        const responseData = await response.json();

        if (response.ok) {  // Ensure request was successful
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/");
        } else {
            console.error("Signup failed:", responseData.message);
            alert(responseData.message);
        }
    } catch (error) {
        console.error("Signup error:", error);
    }
};



  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
    <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "500px" }}>
      <h2 className="text-center">{state === "login" ? "Login" : "Sign Up"}</h2>
  
      <div className="mt-4">
        {state === "signup" && (
          <input
            type="text"
            name="username"
            className="form-control mb-3"
            value={formData.username}
            onChange={changeHandler}
            placeholder="Your Name"
          />
        )}
        <input
          type="email"
          name="email"
          className="form-control mb-3"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Your Email"
        />
        <input
          type="password"
          name="password"
          className="form-control mb-3"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Your Password"
        />
      </div>
  
      <button
        className="btn btn-danger w-100 py-2"
        onClick={() => (state === "login" ? login() : signup())}
      >
        Continue
      </button>
  
      <p className="text-center mt-3">
        {state === "signup" ? (
          <>
            Already have an account?{" "}
            <span className="text-danger" style={{ cursor: "pointer" }} onClick={() => setState("login")}>
              Login here.
            </span>
          </>
        ) : (
          <>
            Create an account?{" "}
            <span className="text-danger" style={{ cursor: "pointer" }} onClick={() => setState("signup")}>
              Click here.
            </span>
          </>
        )}
      </p>
  
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="agree"
          name="agree"
          checked={formData.agree}
          onChange={changeHandler}
        />
        <label className="form-check-label" htmlFor="agree">
          By continuing, I agree to your terms of service and privacy policy.
        </label>
      </div>
    </div>
  </div>
  
  );
};

export default LoginSignup;
