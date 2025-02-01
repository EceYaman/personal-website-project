import { useData } from "../contexts/DataContext";
import { useDarkMode } from "../contexts/ThemeContext";

export function Footer() { 
    const { currData } = useData();  
    const { darkMode} = useDarkMode();

    return(
        <div className={`w-full left-0 absolute mt-28 py-28 pr-44 pl-32 ${darkMode ? "bg-bgDark2" : "bg-bgGray"}`}>
            <h4 className={`max-w-md ${darkMode ? "main-title-dark" : "main-title"}`}>{currData.footer.title}</h4>

            <div className="flex justify-between mt-12 font-medium">
                <nav>
                    <a className={`underline ${darkMode ? "text-primaryDark2" : "text-alertRed"}`}>{currData.footer.mail}</a>
                </nav> 

                <nav>
                    {currData.footer.links.map((link, index) => (
                    <a 
                        key={index}
                        href={link.url}
                        className={`ml-7 ${darkMode ? link.colorDark : link.color}`} 
                        target="_blank" 
                    >
                        {link.name}
                    </a>

                    ))}
                </nav> 
            </div>

        </div>
    )
}