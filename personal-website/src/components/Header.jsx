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
            <div className="flex justify-end items-center sm:mb-6 lg:mb-8 xl:mb-10 text-textLight sm:text-xs lg:text-sm xl:text-base font-bold sm:gap-x-1 lg:gap-x-2 xl:gap-x-4">
                
                <button
                    onClick={toggleDarkMode}
                    className={`sm:w-8 sm:h-4 lg:w-10 lg:h-5 xl:w-12 xl:h-6 rounded-full flex items-center justify-between p-0 transition-all duration-300 ease-in-out ${darkMode ? 'bg-bgGray2' : 'bg-primary'}`}
                >
                    <span
                    className={`sm:w-3 sm:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 rounded-full bg-highlightYellow transition-transform duration-300 ease-in-out 
                        ${darkMode ? 'translate-x-1' : ' sm:translate-x-4 lg:translate-x-5 xl:translate-x-6'}`}
                    />
                </button>
            
                <p className={darkMode ? 'text-textLight2' : 'text-textLight'}>
                    {darkMode ? currData.header.theme[1] : currData.header.theme[0]}
                </p>
                <span>|</span>
                <button onClick={toggleLanguage}>{currData.header.language}</button> 

            </div>
            
            <div className="flex items-center justify-between  sm:text-xs lg:text-sm xl:text-base">
                <div 
                className={`sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 flex items-center justify-center rounded-full xl:text-xl font-bold origin-center rotate-45 
                    ${darkMode ? 'bg-logoDark2 text-logoLight2' : 'bg-logoLight text-logoDark'}`}
                >
                    {currData.heroSection.name.charAt(0).toUpperCase()}
                </div>
        
                <nav>
                    {currData.header.nav.map((link, index) => (
                        <a key={index} href={link.link} 
                        className={`sm:px-3 sm:py-2 lg:px-4 lg:py-2 xl:px-5 xl:py-3  ${index === 2 ? darkMode ? 'bg-white text-primary rounded' : 'border border-primary rounded-md text-primary': 'text-textLight'}`} 
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

 