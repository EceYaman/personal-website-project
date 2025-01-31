import { useData } from "../contexts/DataContext";

export function Footer() { 
    const { currData } = useData();  
    return(
        <div className="bg-bgGray w-full left-0 absolute mt-28 py-28 pr-44 pl-32">
            <h4 className="h4 max-w-sm">{currData.footer.title}</h4>

            <div className="flex justify-between mt-12 font-medium">
                <nav>
                    <a className="text-alertRed underline">{currData.footer.mail}</a>
                </nav> 

                <nav>
                    {currData.footer.links.map((link, index) => (
                    <a 
                        key={index}
                        href={link.url}
                        className={`${link.color} ml-7`} 
                        target="_blank" 
                    >
                        {link.name}
                    </a>

                    ))}
                </nav> 
            </div>

        </div>
    )
}