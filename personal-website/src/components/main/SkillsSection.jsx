import { useData } from "../../contexts/DataContext";
import { useDarkMode } from "../../contexts/ThemeContext";

export function SkillsSection() {
    const { currData } = useData(); 
    const { darkMode} = useDarkMode();

    return(
        <div>
            <h4 className={darkMode ? "main-title-dark" : "main-title"}>{currData.skillsSection.title}</h4>
            <div className="flex justify-between">
            {currData.skillsSection.skills.map((skill, index) => (
                <div key={index} className="max-w-xs">
                <h6 className={`my-5 ${darkMode ? "sub-title-dark" : "sub-title"}`}>{skill.name}</h6>
                <p className={`text-xs ${darkMode ? "text-textLight2" : "text-textLight"}`}>{skill.info}</p>
                </div>
            ))}
          </div>
        </div>
    )
}