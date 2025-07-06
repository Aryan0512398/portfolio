"use client";
import { createContext, useContext, useState } from "react";

const UnlockContext = createContext();

export const UnlockProvider = ({ children }) => {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <UnlockContext.Provider value={{ unlocked, setUnlocked }}>
      {children}
    </UnlockContext.Provider>
  );
};

export const useUnlock = () => useContext(UnlockContext);
