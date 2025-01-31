import { useData } from "../../contexts/DataContext";

export function ProjectsSection() {
    const { currData } = useData();  
    return(
        <div>
            <h4 className="h4">{currData.projectsSection.title}</h4>

            <div className="flex justify-between">
            {currData.projectsSection.projects.map((project, index) => (
                <div key={index} className="max-w-xs">
                    <img src={project.img} alt={project.name} className="my-6" />
                    <h6 className="h6">{project.name}</h6>
                    <p className="text-textLight h-36 text-sm mt-4 leading-6">{project.info}</p>
                    
                    <div className="flex gap-x-2 my-4">
                            {project.programs.map((program, idx) => (
                                <p key={idx} className="w-1/5 text-center text-base border border-primaryDark rounded-md text-primaryDark">{program}</p>
                            ))}
                        </div>
                    <nav className="flex justify-between text-base text-primaryDark underline">
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