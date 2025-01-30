import { useData } from "../../contexts/DataContext";

export function SkillsSection() {
    const { currData } = useData(); 
    return(
        <div>
            <h4 className="h-4">{currData.skillsSection.title}</h4>
            <div className="flex justify-between">
            {currData.skillsSection.skills.map((skill, index) => (
                <div key={index} className="max-w-xs">
                <h6 className="h-6 my-5">{skill.name}</h6>
                <p className="text-textLight text-xs">{skill.info}</p>
                </div>
            ))}
          </div>
        </div>
    )
}