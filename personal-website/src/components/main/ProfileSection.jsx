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

            <div className="flex justify-between">
                <div className="sm:w-[35%] xl:w-1/4">
                    <h6 className={`sm:my-2 lg:my-3 xl:my-5 ${darkMode ? "sub-title-dark" : "sub-title"}`}>
                        {currData.profileSection.title}
                    </h6>

                    {Object.entries(currData.profileSection.profile).map(([label, value]) => (
                            <div key={label} className="my-3 flex justify-between sm:text-xs lg:text-sm xl:text-base">
                                <p className={`font-bold ${darkMode ? "text-textLight2" : "text-textDark"}`}>
                                    {label}
                                </p> 
                                <p className={darkMode ? "text-textLight2" : "text-textLight"}>
                                    {value}
                                </p>
                            </div>
                        ))}

                </div>

                <div className="w-[63%]">
                    <h6 className={`sm:my-2 lg:my-3 xl:my-5 ${darkMode ? "sub-title-dark" : "sub-title"}`}>
                        {currData.profileSection.aboutMe.title}
                    </h6>
                    <p className={`sm:text-xs lg:text-sm xl:text-base leading-8 ${darkMode ? "text-textLight2" : "text-textLight"}`}>
                        {currData.profileSection.aboutMe.info}
                    </p>
                </div>
                
            </div>
        </div>
    )
}