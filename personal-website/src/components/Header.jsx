import { useState } from "react";
import { useData } from "../contexts/DataContext";
import { useDarkMode } from "../contexts/ThemeContext";

export function Header() { 
    const { currData, toggleLanguage } = useData(); 
    const { darkMode, toggleDarkMode } = useDarkMode();

    const handleLinkClick = (index) => {
        setActiveLink(index); 
    };

    return(
        <>
            <div className="flex justify-end mb-10 text-xs font-bold text-textLight items-center gap-x-3">
                
                <button
                    onClick={toggleDarkMode}
                    className="w-10 h-5 rounded-full bg-primary flex items-center justify-between p-0 transition-all duration-300 ease-in-out"
                >
                    <span
                    className={`w-4 h-4 rounded-full bg-highlightYellow transition-transform duration-300 ease-in-out 
                        ${darkMode ? 'translate-x-5' : 'translate-x-1'}`}
                    />
                </button>
            
                <p>{darkMode ? currData.header.theme[1] : currData.header.theme[0]}</p>
                <span>|</span>
                <button onClick={toggleLanguage}>{currData.header.language}</button> 

            </div>
            
            <div className="flex items-center justify-between">
                <div 
                className="w-12 h-12 flex items-center justify-center bg-logoLight text-logoDark rounded-full text-xl font-bold origin-center rotate-45"
                >
                    {currData.heroSection.name.charAt(0).toUpperCase()}
                </div>
        
                <nav>
                    {currData.header.nav.map((link, index) => (
                        <a key={index} href={link.link} className={`px-5 py-3  ${index === 2 ? 'border border-primary rounded-md text-primary' : 'text-textLight'}`} onClick={() => handleLinkClick(index)} 
                        >
                            {link.a}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    )
}

 