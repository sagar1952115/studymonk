import React, { useState } from "react";
import circle from "../../asset/circle.png";
import "./Auth.css";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
  const [islogin, setisLogin] = useState(true);
  return (
    <div>
      <div className="auth-container">
        <div className="left-container">
          <img src={circle} alt="" className="circle" />
          <div className="left-content">Hire the best talent here.</div>
        </div>
        <div className="right-container">
          <div className="auth-header">
            <button
              className={`${islogin ? "active" : ""}`}
              onClick={() => setisLogin(true)}
            >
              Login
            </button>
            <button
              className={`${!islogin ? "active" : ""}`}
              onClick={() => setisLogin(false)}
            >
              Signup
            </button>
          </div>
          <div className="auth-view">
            {islogin && <Login />}
            {!islogin && <Signup />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
