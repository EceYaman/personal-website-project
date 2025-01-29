import { useData } from "../../contexts/DataContext";

export function SkillsSection() {
    const { currData } = useData(); 
    return(
        <div>
            <h4 className="text-textDark font-bold text-3xl">{currData.skillsSection.title}</h4>
            <div className="flex justify-between">
            {currData.skillsSection.skills.map((skill, index) => (
                <div key={index} className="max-w-xs">
                <h6 className="text-primary text-2xl my-4">{skill.name}</h6>
                <p className="text-textLight text-xs">{skill.info}</p>
                </div>
            ))}
          </div>
        </div>
    )
}