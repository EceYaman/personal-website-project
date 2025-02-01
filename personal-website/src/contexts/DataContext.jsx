import { createContext, useContext, useEffect, useState } from "react";
import { data } from "../data";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [language, setLanguage] = useLocalStorage("language", "en");
  const [currData, setCurrData] = useState(data.en); 

  useEffect(() => {
    setCurrData(data[language]);
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "tr" : "en";
    setLanguage(newLanguage); 
  };

  return (
    <DataContext.Provider value={{ currData, toggleLanguage }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);