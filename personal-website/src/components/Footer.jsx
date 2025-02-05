import { useData } from "../contexts/DataContext";
import { useDarkMode } from "../contexts/ThemeContext";

export function Footer() { 
    const { currData } = useData();  
    const { darkMode} = useDarkMode();

    return(
        <div className={`w-full absolute xl:py-28 xl:pr-44 xl:pl-32 sm:px-4 lg:px-12 sm:py-6 lg:py-20 ${darkMode ? "bg-bgDark2" : "bg-bgGray"}`}>
            <h4 className={`sm:max-w-xs lg:max-w-sm xl:max-w-md ${darkMode ? "main-title-dark" : "main-title"}`}>{currData.footer.title}</h4>

            <div className="flex justify-between mt-12 font-medium">
                <nav className="flex gap-x-2 items-center">
                    <img src={currData.footer.icon} className="sm:h-3 lg:h-4 xl:h-5"/>
                    <a className={`underline sm:text-xs lg:text-sm xl:text-base ${darkMode ? "text-primaryDark2" : "text-alertRed"}`}>{currData.footer.mail}</a>
                </nav> 

                <nav>
                    {currData.footer.links.map((link, index) => (
                    <a 
                        key={index}
                        href={link.url}
                        className={`ml-7 sm:text-xs lg:text-s xl:text-base ${
                            index === 0
                              ? "text-textLight"  
                              : index === 1
                              ? "text-successGreen"  
                              : "text-linkBlue"  
                          }`}
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