import { useData } from "../../contexts/DataContext";
import { useDarkMode } from "../../contexts/ThemeContext";

export function ProfileSection() {
    const { currData } = useData();  
    const { darkMode} = useDarkMode();
   
    return(
        <div>
            <h4 className={darkMode ? "main-title-dark" : "main-title"}>
                {currData.profileSection.title}
            </h4>

            <div className="flex lg:flex-row justify-between sm:flex-col sm:items-center">
                <div className="sm:w-[70%] lg:w-1/4 xl:max-w-xs">
                    <h6 className= {darkMode ? "sub-title-dark" : "sub-title"}>
                        {currData.profileSection.title}
                    </h6>

                    {Object.entries(currData.profileSection.profile).map(([label, value]) => (
                            <div key={label} className="mb-2 flex justify-between sm:text-xs lg:text-sm xl:text-lg">
                                <p className={`font-bold ${darkMode ? "text-textLight2" : "text-textDark"}`}>
                                    {label}
                                </p> 
                                <p className={darkMode ? "text-textLight2" : "text-textDark"}>
                                    {value}
                                </p>
                            </div>
                        ))}

                </div>

                <div className="xl:max-w-3xl lg:max-w-md sm:max-w-xs">
                    <h6 className={darkMode ? "sub-title-dark" : "sub-title"}>
                        {currData.profileSection.aboutMe.title}
                    </h6>
                    <div className={`sm:text-xs lg:text-sm xl:text-base leading-8 ${darkMode ? "text-textLight2" : "text-textLight"}`}>
                        <p>{currData.profileSection.aboutMe.info1}</p>
                        <p className="mt-4">{currData.profileSection.aboutMe.info2}</p>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}