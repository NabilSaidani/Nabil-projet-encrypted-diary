import React from "react";
import { JournalProvider } from "./JournalContext";
import NewEntry from "./components/NewEntry";
import PasswordComponent from "./components/PasswordComponent";
import ReadEntry from "./components/ReadEntry";
import "./App.css";

function App() {
  return (
    <JournalProvider>
      <div>
        <h1>Mon Journal Crypté</h1>
        <NewEntry />
        <ReadEntry/>
        <PasswordComponent
          onDecrypt={(decryptedText) => {
            console.log("Texte décrypté:", decryptedText);
          }}
          encryptedText="TonTexteCryptéIci" 
        />
      </div>
    </JournalProvider>
  );
}

export default App;