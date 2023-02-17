import React from "react";
import '../App.css';
import { Auth, useAuth } from "@arcana/auth-react";
import SignUp from "./signUp";
import { Route } from "react-router-dom";
import Canvas from "./Canvas";
const onLogout = () => {
  <Route path="/signup" exact element={<SignUp />} />;
};
const Login = () => {
  const auth = useAuth();
  const logout = async () => {
    auth.logout();
    onLogout();
  };
  return (
    <>
      <Canvas/>
      <button onClick={logout}>LOG OUT</button>
      <button className="btn2">SAVE</button>
    </>
  );
};

export default Login;
