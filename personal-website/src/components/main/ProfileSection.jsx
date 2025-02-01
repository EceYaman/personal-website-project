import { useData } from "../../contexts/DataContext";
import { useDarkMode } from "../../contexts/ThemeContext";

export function ProfileSection() {
    const { currData } = useData();  
    const { darkMode} = useDarkMode();
   
    return(
        <div className="my-20">
            <h4 className={darkMode ? "main-title-dark" : "main-title"}>{currData.profileSection.title}</h4>
        <div className="flex justify-between">
            <div className="w-1/4">
                <h6 className={`my-5 ${darkMode ? "sub-title-dark" : "sub-title"}`}>{currData.profileSection.title}</h6>

                {Object.entries(currData.profileSection.profile).map(([label, value]) => (
                        <div key={label} className="my-3 flex justify-between text-base">
                            <p className={`font-bold ${darkMode ? "text-textLight2" : "text-textDark"}`}>{label}</p> 
                            <p className={darkMode ? "text-textLight2" : "text-textLight"}>{value}</p>
                        </div>
                    ))}

            </div>
            <div className="w-[63%]">
                <h6 className={`my-5 ${darkMode ? "sub-title-dark" : "sub-title"}`}>{currData.profileSection.aboutMe.title}</h6>
                <p className={`text-base leading-8 ${darkMode ? "text-textLight2" : "text-textLight"}`}>{currData.profileSection.aboutMe.info}</p>
            </div>
        </div>
        </div>
    )
}