import { useState } from "react";
import { useData } from "../contexts/DataContext";

export function Header() { 
    const { currData, toggleLanguage } = useData(); 

    const [activeLink, setActiveLink] = useState(2); 

    const handleLinkClick = (index) => {
        setActiveLink(index); 
    };

    return(
        <div>
            <div className="flex justify-end mb-10 text-sm text-textLight">
               <div className="mx-2">
                <div 
                    className={`w-10 h-5 rounded-full cursor-pointer flex items-center 
                    bg-primary transition-all duration-300 ease-in-out`}
                >
                    <div 
                        className={`w-4 h-4 rounded-full bg-highlightYellow transition-transform duration-300 ease-in-out 
                        ${ currData.header.theme == "Dark Theme" ? 'translate-x-5' : 'translate-x-1'}`}
                    />
                </div>
                </div>
                <button>{currData.header.theme}</button> 
                <span className="mx-2">|</span>
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
                        <a key={index} href={link.link} className={`px-5 py-3 ${activeLink === index ? 'border border-primary rounded-md text-primary' : 'px-5 py-3 text-textLight'}`} 
                        onClick={() => handleLinkClick(index)} 
                        >
                            {link.a}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    )
}