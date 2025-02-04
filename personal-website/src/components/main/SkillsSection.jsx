import { useData } from "../../contexts/DataContext";
import { useDarkMode } from "../../contexts/ThemeContext";

export function SkillsSection() {
    const { currData } = useData(); 
    const { darkMode} = useDarkMode();

    return(
        <div>
            <h4 className={darkMode ? "main-title-dark" : "main-title"}>
                {currData.skillsSection.title}
            </h4>
            <div className="flex lg:flex-row justify-between sm:flex-col sm:items-center">
                {currData.skillsSection.skills.map((skill, index) => (
                    <div key={index} className="sm:w-[70%] xl:max-w-xs">
                        <h6 className={darkMode ? "sub-title-dark" : "sub-title"}>
                            {skill.name}
                        </h6>
                        <p className={`text-xs ${darkMode ? "text-textLight2" : "text-textLight"}`}>
                            {skill.info}
                        </p>
                    </div>
                ))}
          </div>
        </div>
    )
}