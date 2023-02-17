import React from "react";
import "../App.css";
import { Auth, useAuth } from "@arcana/auth-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./Login";
import { Box } from "@mui/system";
const onLogin = () => {
  <Route path="/login" exact element={<Login />} />;
};
const SignUp = () => {
  const auth = useAuth();
  return (
    <div className="animation_layer" id="signup1">
      <div className="login">
        {auth.loading ? (
          <>"Loading"</>
        ) : auth.isLoggedIn ? (
          <>
            <Box className="loginpage">
              <Login />
            </Box>
          </>
        ) : (
          <div>
            <center><h3>Scribble Pad</h3></center>
            <Auth externalWallet={true} theme={"dark"} onLogin={onLogin} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
