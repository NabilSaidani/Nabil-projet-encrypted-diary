import React, { useState, useContext } from "react";
import { JournalContext } from "../JournalContext";


const NewEntry: React.FC = () => {
  const { addEntry } = useContext(JournalContext);
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  const handleAddEntry = () => {
    addEntry(text, password);
    setText("");
    setPassword("");
  };

  return (
    <div>
      <h2>Nouvelle entrée</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Entrée votre message ici"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Entrer un mot de passe ici"
      />
      <button onClick={handleAddEntry}>Ajouter</button>
    </div>
  );
};

export default NewEntry;