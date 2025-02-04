import { useData } from "../../contexts/DataContext";
import { useDarkMode } from "../../contexts/ThemeContext";

export function ProjectsSection() {
    const { currData } = useData();  
    const { darkMode} = useDarkMode();

    return(
        <div>
            <h4 className={darkMode ? "main-title-dark" : "main-title"}>
                {currData.projectsSection.title}
            </h4>

            <div className="flex lg:flex-row sm:flex-col lg:justify-between sm:items-center sm:gap-y-4">
            {currData.projectsSection.projects.map((project, index) => (
                <div key={index} className="xl:max-w-xs lg:max-w-[30%] sm:max-w-xs">
                    <img src={project.img} alt={project.name} className="sm:my-4 lg:my-5 xl:my-6" />
                    <h6 className={darkMode ? "sub-title-dark" : "sub-title"}>
                        {project.name}
                    </h6>
                    <p className={`sm:h-auto xl:h-36 sm:text-xs lg:text-xs xl:text-sm mt-4 xl:leading-6 ${darkMode ? "text-textLight2" : "text-textLight"}`}>
                        {project.info}
                    </p>
                    
                    <div className="flex gap-x-2 my-4">
                            {project.programs.map((program, idx) => (
                                <p key={idx} className={`!py-0 btn ${darkMode ? "border-primaryDark2 text-primaryDark2 bg-bgGray2" : "btn-base"}`}>
                                    {program}
                                </p>
                            ))}
                        </div>
                    <nav className={`flex justify-between sm:text-xs lg:text-sm xl:text-lg underline ${darkMode ? "text-primary2" : "text-primaryDark"}`}>
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