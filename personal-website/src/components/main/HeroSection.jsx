import { useData } from "../../contexts/DataContext";
import { useDarkMode } from "../../contexts/ThemeContext";

export function HeroSection() {
    const { currData } = useData();  
    const { darkMode} = useDarkMode();

    return(
        <div className="flex justify-between sm:my-10 lg:my-16 xl:my-20">
            <div className="w-full sm:max-w-xs lg:max-w-2xl">

                <div className="flex items-center">
                    <hr className={`sm:w-8 lg:w-10 xl:w-16 border ${darkMode ? "border-primaryDark2" : "border-primaryDark"}`} />
                    <p className={`mx-2 sm:text-sm lg:text-base xl:text-xl ${darkMode ? "text-primaryDark2" : "text-primaryDark"}`}>
                        {currData.heroSection.name}
                    </p>
                </div>
                
                <h2 className={`sm:text-2xl lg:text-4xl xl:text-7xl font-bold leading-none sm:mt-1 lg:mt-4 xl:mt-8 ${darkMode ? "text-textDark2" :"text-textDark"}`}>
                    {currData.heroSection.title}
                </h2>
                <p className={`sm:text-xs lg:text-sm xl:text-xl sm:max-w-[95%] xl:max-w-xl sm:my-2 lg:my-4 xl:my-8 ${darkMode ? "text-textLight2" :"text-textLight"}`}>
                    {currData.heroSection.intro}
                </p>

                <div className="flex sm:space-x-1 lg:space-x-2 xl:space-x-4 ">
                    {currData.heroSection.socials.map((social, index) => (
                        <button 
                            key={index}
                            onClick={() => window.location.href = social.link} 
                            className={darkMode ? "btn-dark" : "btn"}
                        >
                            {social.logo && (
                                <img 
                                    src={darkMode ? social.logoDark : social.logo }
                                    alt={`${social.text} logo`} 
                                    className="sm:w-3 lg:w-5 xl:w-8 mr-1" 
                                />
                            )}
                            <span>{social.text}</span>
                        </button>
                    ))}

                </div>
            </div>

            <div className="w-full sm:max-w-md lg:max-w-lg sm:pt-10 lg:pt-10 xl:pt-14">
                <img src={currData.heroSection.profileImage} className="w-full rounded-lg"/>
            </div>
        </div>
    )
}