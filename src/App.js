import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import HomeScreen from "./components/HomeScreen";
import SignUp from "./components/signUp";
import Login from "./components/Login";
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<HomeScreen />} />
      <Route path="/Signup" exact element={<SignUp />} />
      <Route path="/login" exact element={<Login />} />
    </Routes>
  </BrowserRouter>
);
export default App;
