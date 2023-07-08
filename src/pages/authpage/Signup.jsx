import React from "react";

const Signup = () => {
  return (
    <div>
      <div className="authorization-container">
        <input
          className="auth-input"
          type="text"
          placeholder="Enter  Username"
        />
        <input className="auth-input" type="text" placeholder="Enter Email" />
        <input
          className="auth-input"
          type="text"
          placeholder="Enter Password"
        />
        <button className="auth-button">Login</button>
      </div>
    </div>
  );
};

export default Signup;
