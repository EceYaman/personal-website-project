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
            <div className="flex justify-between">
                {currData.skillsSection.skills.map((skill, index) => (
                    <div key={index} className="sm:w-[30%] xl:max-w-xs">
                        <h6 className={`sm:my-2 lg:my-3 xl:my-5 ${darkMode ? "sub-title-dark" : "sub-title"}`}>
                            {skill.name}
                        </h6>
                        <p className={`sm:text-xs lg:text-xs xl:text-s ${darkMode ? "text-textLight2" : "text-textLight"}`}>
                            {skill.info}
                        </p>
                    </div>
                ))}
          </div>
        </div>
    )
}