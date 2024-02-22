import { Data } from "./projectdata"
import { Project1 } from "./project1"
import Contact from "../components/contactme"

export default function Project(){
    return(
        <div id="projects">
        {
            Data.map((item)=>{
                return(
                    <Project1 key={item.index} Data={item}/>
                )
            })
        }
        
        <div>
{/* <Contact/> */}
        </div>
        </div>
    )
}