import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

const ConnectModal = () => {
  const [signup, setSignUp] = useState(true);

  return (
    <div className="connect-modal">
      <div className="header-btn">
        <button
          style={{ background: signup ? "rgb(28,28,28)" : "rgb(83,83,83)" }}
          onClick={() => setSignUp(true)}
        >
          S'inscrire
        </button>
        <button
          style={{ background: signup ? "rgb(83,83,83)" : "rgb(28,28,28)" }}
          onClick={() => setSignUp(false)}
        >
          Se connecter
        </button>
      </div>
      {signup ? <SignUp /> : <Login />}
    </div>
  );
};

export default ConnectModal;
