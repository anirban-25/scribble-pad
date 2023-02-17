import "../App.css";
import SignUp from "./signUp";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
function TextBlock() {
  return (
    <div>
      <div id="textblock">
        <Link to="/signup">
          <button className="btn">Sign In</button>
        </Link>
        <div id="textblock-container">
          <h1 id="textblock-title">What is Scribble Pad?</h1>
          <p id="textblock-content">
            You have preserved many memories inside yourself
            <br />
            Have you heard about preserving artworks?
            <br />
            <br />
            We present to you a scribble pad based on Web3.0
            <br />
            <br />
            You can draw, scribble, whatever you want and one click on the save
            button will make sure it gets 'preserved'😉
            <br />
            <br />
            The drawing will be saved using ipfs
          </p>
        </div>
        <footer id="textblock-footer">
          Created with 🧡 by team Ethereum Enthusiasts
        </footer>
      </div>
    </div>
  );
}

export default TextBlock;
