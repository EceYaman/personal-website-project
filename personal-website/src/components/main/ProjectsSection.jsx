import { useData } from "../../contexts/DataContext";
import { useDarkMode } from "../../contexts/ThemeContext";

export function ProjectsSection() {
    const { currData } = useData();  
    const { darkMode} = useDarkMode();

    return(
        <div>
            <h4 className={darkMode ? "main-title-dark" : "main-title"}>{currData.projectsSection.title}</h4>

            <div className="flex justify-between">
            {currData.projectsSection.projects.map((project, index) => (
                <div key={index} className="max-w-xs">
                    <img src={project.img} alt={project.name} className="my-6" />
                    <h6 className={darkMode ? "sub-title-dark" : "sub-title"}>{project.name}</h6>
                    <p className={`h-36 text-sm mt-4 leading-6 ${darkMode ? "text-textLight2" : "text-textLight"}`}>{project.info}</p>
                    
                    <div className="flex gap-x-2 my-4">
                            {project.programs.map((program, idx) => (
                                <p key={idx} className={`w-1/5 text-center text-base border rounded-md ${darkMode ? "border-primaryDark2 text-primaryDark2 bg-bgGray2" : "border-primaryDark text-primaryDark"}`}>{program}</p>
                            ))}
                        </div>
                    <nav className={`flex justify-between text-base underline ${darkMode ? "text-primary2" : "text-primaryDark"}`}>
                    {Object.entries(project.links).map(([label, url], i) => (
                        <a key={i} href={url} target="_blank" >{label}</a>
                    ))}
                    </nav>

                </div>
            ))}
            </div>

        </div>
    )
}