import React, { useRef } from "react";
import { auth } from "../utils/firebase.config";//appel à la BD

const SignUp = () => {
  const registerEmail = useRef(); //grace à useRef ca on enregistre directement lemail dans la BD
  const registerPassword = useRef();

  const handleRegister = (e) => {
    e.preventDefault();

    try {
      auth.createUserWithEmailAndPassword( //pour créer utilisateur
        registerEmail.current.value,
        registerPassword.current.value
      );
    } catch (error) {
      console.log(error.message);
    }

    console.log(registerEmail.current.value, registerPassword.current.value);
  };

  return (
    <div className="signup-container">
      <div className="signup">
        <h3>S'inscrire</h3>
        <form onSubmit={(e) => handleRegister(e)}>
          <input type="text" placeholder="Pseudo" required />
          <input
            type="email"
            placeholder="Email"
            required
            ref={registerEmail}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            required
            ref={registerPassword}
          />
          <input type="submit" value="Valider inscription" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
