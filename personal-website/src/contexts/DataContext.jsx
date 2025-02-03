import { createContext, useContext, useEffect, useState } from "react";
import { data } from "../data";
import { useLocalStorage } from "../hooks/useLocalStorage";
import axios from "axios";
import { toast } from "react-toastify";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [language, setLanguage] = useLocalStorage("language", "en");
  const [currData, setCurrData] = useState(data.en); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sendData = async () => {
      try {
        const response = await axios.post('https://reqres.in/api/workintech', data[language]);
        setCurrData(response.data);  
        setLoading(false); 
        console.log(response.data);  
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);  
      }
    };
    sendData();  

    if (language === "en") {
      toast("Welcome! Let’s work together..", { autoClose: 3000, className:"toast-custom", position: "top-left"});
    } else if (language === "tr") {
      toast("Hoş geldiniz! Birlikte çalışalım..", { autoClose: 3000, className:"toast-custom",position: "top-left" });
    }

  }, [language]); 

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "tr" : "en";
    setLanguage(newLanguage); 
  };


  if (loading) {
    return <div>Loading...</div>;
}


  return (
    <DataContext.Provider value={{ currData, toggleLanguage }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);