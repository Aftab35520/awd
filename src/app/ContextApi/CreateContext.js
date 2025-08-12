// context/MyContext.js
'use client'
import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [Answer, setAnswer] = useState('Default');
  const [subscribe, setsubscribe] = useState(false);
  return (
    <MyContext.Provider value={{ Answer, setAnswer,subscribe, setsubscribe }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
