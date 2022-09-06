import React, { useState } from "react";
import ConnectModal from "./components/ConnectModal";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase.config.js";
import CreatePost from "./components/CreatePost";

const App = () => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  }); //pour savoir si on est connecté

  return (
    <div>
      <div className="app-header">
        {user && (
          <div className="user-infos">
            <span>{user?.displayName[0]}</span> 
            {/* si user existe alors tu m'affiches displayName */}
            <h4>{user?.displayName}</h4>
            <button><i className="fa-solid fa-arrow-right-from-bracket"></i></button>
          </div>
        )}
        {user ? <CreatePost /> : <ConnectModal />}
      </div>
      <div className="posts-container"></div>
    </div>
  );
};

export default App;
