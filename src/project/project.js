import { Data } from "./projectdata"
import { Project1 } from "./project1"

export default function Project(){
    return(
        <>
        {
            Data.map((item)=>{
                return(
                    <Project1 key={item.index} Data={item}/>
                )
            })
        }
        
        
        </>
    )
}