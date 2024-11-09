import React, { useContext, useState } from "react";
import { JournalContext } from "../JournalContext";
import PasswordComponent from "./PasswordComponent";

const ReadEntry: React.FC = () => {
  const { entries, deleteEntry } = useContext(JournalContext);
  const [selectedEntry, setSelectedEntry] = useState<{
    id: string;
    encryptedText: string;
  } | null>(null);
  const [decryptedText, setDecryptedText] = useState("");

  const handleRead = (entry: { id: string; encryptedText: string }) => {
    setSelectedEntry(entry);
    setDecryptedText("");
  };

  const handleDelete = (id: string) => {
    deleteEntry(id);
    if (selectedEntry && selectedEntry.id === id) {
      setSelectedEntry(null);
      setDecryptedText("");
    }
  };

  return (
    <div>
      <h3>Liste des entrées</h3>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <button onClick={() => handleRead(entry)}>Lire</button>
            <button onClick={() => handleDelete(entry.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      {selectedEntry && (
        <PasswordComponent
          encryptedText={selectedEntry.encryptedText}
          onDecrypt={(text) => setDecryptedText(text)}
        />
      )}
      {decryptedText && <p>Message décrypté : {decryptedText}</p>}
    </div>
  );
};

export default ReadEntry;