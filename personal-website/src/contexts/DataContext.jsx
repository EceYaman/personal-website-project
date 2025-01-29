import { createContext, useContext, useState } from "react";
import { data } from "../data";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [language, setLanguage] = useState("en"); 
  const [currData, setCurrData] = useState(data.en); 

  const toggleLanguage = () => {
    if (language === "en") {
      setLanguage("tr");
      setCurrData(data.tr); 
    } else {
      setLanguage("en");
      setCurrData(data.en); 
    }
  };

  return (
    <DataContext.Provider value={{ currData, toggleLanguage }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);