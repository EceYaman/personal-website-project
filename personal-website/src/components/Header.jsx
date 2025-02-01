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
                    className={`w-10 h-5 rounded-full flex items-center justify-between p-0 transition-all duration-300 ease-in-out ${darkMode ? 'bg-bgGray2' : 'bg-primary'}`}
                >
                    <span
                    className={`w-4 h-4 rounded-full bg-highlightYellow transition-transform duration-300 ease-in-out 
                        ${darkMode ? 'translate-x-1' : 'translate-x-5'}`}
                    />
                </button>
            
                <p className={darkMode ? 'text-textLight2' : 'text-textLight'}>{darkMode ? currData.header.theme[1] : currData.header.theme[0]}</p>
                <span>|</span>
                <button onClick={toggleLanguage}>{currData.header.language}</button> 

            </div>
            
            <div className="flex items-center justify-between">
                <div 
                className={`w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold origin-center rotate-45 
                    ${darkMode ? 'bg-logoDark2 text-logoLight2' : 'bg-logoLight text-logoDark'}`}
                >
                    {currData.heroSection.name.charAt(0).toUpperCase()}
                </div>
        
                <nav>
                    {currData.header.nav.map((link, index) => (
                        <a key={index} href={link.link} 
                        className={`px-5 py-3  ${index === 2 ? darkMode ? 'bg-white text-primary rounded' : 'border border-primary rounded-md text-primary': 'text-textLight'}`} 
                        onClick={() => handleLinkClick(index)} 
                        >
                            {link.a}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    )
}

 