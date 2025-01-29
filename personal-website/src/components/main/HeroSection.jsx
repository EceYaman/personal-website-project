import { useData } from "../../contexts/DataContext";

export function HeroSection() {
    const { currData } = useData();  
    return(
        <div className="flex justify-between my-20">
            <div className="max-w-2xl">

                <div className="flex items-center mb-2">
                    <div className="w-16 border-t-2 border-gray-400"></div>
                    <p className="mx-4 text-xl text-primary">{currData.heroSection.name}</p>
                </div>
                
                <h2 className="text-7xl font-bold leading-none mt-8 text-textDark">{currData.heroSection.title}</h2>
                <p className="text-xl max-w-xl my-8 text-textLight">{currData.heroSection.intro}</p>

                <div className="flex space-x-4 mt-4">
                    {currData.heroSection.socials.map((social, index) => (
                        <button 
                            key={index}
                            onClick={() => window.location.href = social.link} 
                            className="btn"
                        >
                            {social.logo && (
                                <img 
                                    src={social.logo} 
                                    alt={`${social.text} logo`} 
                                    className="w-8 h-8 mr-2" 
                                />
                            )}
                            <span>{social.text}</span>
                        </button>
                    ))}

                </div>
            </div>

            <img src={currData.heroSection.profileImage} className="max-w-lg rounded-lg"/>
        </div>
    )
}