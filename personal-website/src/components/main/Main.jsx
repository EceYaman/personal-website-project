import { HeroSection } from "./HeroSection";
import { ProfileSection } from "./ProfileSection";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";


export function Main() { 
    return(
        <div>
            <HeroSection />
            <SkillsSection />
            <ProfileSection />
            <ProjectsSection />
        </div>
    )
}