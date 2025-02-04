import { useEffect, useState } from "react";
import { useData } from "../contexts/DataContext";
import { useDarkMode } from "../contexts/ThemeContext";

export function Header() { 
    const { currData, toggleLanguage } = useData(); 
    const { darkMode, toggleDarkMode } = useDarkMode();

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === "d" || e.key === "D") {
                toggleDarkMode();
            }
        };
        window.addEventListener("keydown", handleKeyPress);
        return () => {window.removeEventListener("keydown", handleKeyPress)};
    }, []);

    const handleScroll = (e, target) => {
        e.preventDefault();
        const targetElement = document.querySelector(target);
        window.scrollTo({top: targetElement.offsetTop, behavior: 'smooth'});
    };

    return(
        <>
            <div className="flex justify-end items-center sm:mb-6 lg:mb-8 xl:mb-10 text-textLight sm:text-xs lg:text-sm xl:text-sm font-semibold sm:gap-x-1 lg:gap-x-2 xl:gap-x-4">
                
                <button
                    onClick={toggleDarkMode}
                    className={`w-11 h-5 rounded-full flex items-center justify-between p-0 trans hover:scale-125 ${darkMode ? 'bg-bgGray2' : 'bg-primary'}`}
                >
                    <span
                        className={`w-4 h-4 rounded-full bg-highlightYellow absolute trans 
                            ${darkMode ? 'translate-x-1' : 'translate-x-6'}`}
                    />
                    <span
                        className={`w-3 h-3 rounded-full  absolute trans
                            ${darkMode ? 'translate-x-2.5 bg-bgGray2' : 'bg-highlightYellow translate-x-6'}`}
                    />
                </button>
            
                <p className={darkMode ? 'text-textLight2' : 'text-textLight'}>
                    {darkMode ? currData.header.theme[1] : currData.header.theme[0]}
                </p>
                <span>|</span>
                <button className={`hover:scale-125 ${darkMode ? "text-primary2" : "text-primary"}`} onClick={toggleLanguage}>{currData.header.language}</button> 

            </div>
            
            <div className="flex items-center justify-between  sm:text-xs lg:text-sm xl:text-lg">
                <div 
                className={`sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 flex items-center justify-center rounded-full xl:text-xl font-bold origin-center rotate-45 
                    ${darkMode ? 'bg-logoDark2 text-logoLight2' : 'bg-logoLight text-logoDark'}`}
                >
                    {currData.heroSection.name.charAt(0).toUpperCase()}
                </div>
        
                <nav className="flex justify-end items-center sm:w-[55%] sm:gap-x-7 lg:w-1/2 lg:gap-x-14 xl:w-2/5 xl:gap-x-24">
                    {currData.header.nav.map((link, index) => (
                        <a key={index} href={link.link}  onClick={(e) => handleScroll(e, link.link)} 
                        className={`trans ${index === 2 ? 'btn btn-base' : 'text-textLight hover:text-primary hover:translate-y-[-5px]'} `}
                        >
                            {link.a}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    )
}

 