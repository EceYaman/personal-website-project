import { HeroSection } from "./HeroSection";
import { ProfileSection } from "./ProfileSection";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";


export function Main() { 
    return(
        <div>
            <HeroSection />
            
            <div id="skills">
                <SkillsSection />
            </div>

            <hr className="sm:my-10 lg:my-12 xl:my-16 border border-logoLight"/>

            <ProfileSection />

            <hr className="sm:my-10 lg:my-12 xl:my-16 border border-logoLight"/>

            <div id="projects">
                <ProjectsSection />
            </div>

        </div>
    )
}