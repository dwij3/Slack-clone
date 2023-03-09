import React from "react";
import "./App.css";
import Main from "./components/main/Main";
import UserContextProvider from "./hooks/UserContext";
import Profile from "./components/profile";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Profile />
        <Main />
      </div>
    </UserContextProvider>
  );
}

export default App;
