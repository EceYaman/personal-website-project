import { useData } from "../../contexts/DataContext";

export function ProfileSection() {
    const { currData } = useData();  
   
    return(
        <div className="my-20">
            <h4 className="h-4">{currData.profileSection.title}</h4>
        <div className="flex justify-between">
            <div className="w-1/4">
                <h6 className="h-6 my-5">{currData.profileSection.title}</h6>

                {Object.entries(currData.profileSection.profile).map(([label, value]) => (
                        <div key={label} className="my-3 flex justify-between text-base">
                            <p className="font-bold text-textDark">{label}</p> 
                            <p className=" text-textLight">{value}</p>
                        </div>
                    ))}

            </div>
            <div className="w-[63%]">
                <h6 className="h-6 my-5">{currData.profileSection.aboutMe.title}</h6>
                <p className=" text-textLight text-base leading-8">{currData.profileSection.aboutMe.info}</p>
            </div>
        </div>
        </div>
    )
}