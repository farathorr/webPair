import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import useField from "../hooks/useField";

const LoginComponent = ({ setIsAuthenticated }) => {
  const emailInput = useField("email");
  const passwordInput = useField("password");
  const {login} = useLogin(emailInput.value, passwordInput.value, setIsAuthenticated);

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input
          type="text"
          {...emailInput}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          {...passwordInput}
        />
      </label>
      <br />
      <button onClick={login}>Log In</button>
    </div>
  );
};

export default LoginComponent;
