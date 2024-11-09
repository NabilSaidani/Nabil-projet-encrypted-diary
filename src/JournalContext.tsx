import React, { createContext, useState, ReactNode } from "react";
import CryptoJS from "crypto-js";

export const JournalContext = createContext<{
  entries: { id: string; encryptedText: string }[];
  addEntry: (text: string, password: string) => void;
  deleteEntry: (id: string) => void;
}>({
  entries: [],
  addEntry: () => {},
  deleteEntry: () => {},
});

export function JournalProvider({ children }: { children: ReactNode }) {
  const [entries, setEntries] = useState<
    { id: string; encryptedText: string }[]
  >([]);

  const addEntry = (text: string, password: string) => {
    const encryptedText = CryptoJS.AES.encrypt(text, password).toString();
    setEntries([...entries, { id: Date.now().toString(), encryptedText }]);
  };

  const deleteEntry = (id: string) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <JournalContext.Provider value={{ entries, addEntry, deleteEntry }}>
      {children}
    </JournalContext.Provider>
  );
}