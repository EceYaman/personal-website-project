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

  const fetchData = async () => {
    try {
      const response = await axios.post('https://reqres.in/api/workintech', data[language]);
      setCurrData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
      toast.error("Error!");
    } finally {
      setLoading(false);  
    }
  };

  useEffect(() => {
    fetchData();
  
    const toastMessage = language === "en"
      ? "Welcome! Let’s work together.."
      : "Hoş geldiniz! Birlikte çalışalım..";
      
    if (toastMessage) {
      toast(toastMessage, { autoClose: 3000, className: "toast-custom", position: "top-center" });
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