import React from "react";
import SingleProjectCard from "./SingleProjectCard";
import { useContextApp } from "@/app/contextApp";


function AllProjectsSection(){
    const {
        allProjectsObject: { allProjects },
    }=useContextApp();
    return(
        <ul className=" overflow-auto flex gap-4 flex-wrap mt-6 max-sm:grid max-sm:grid-cols-1">
            
            {allProjects.map((project)=>(
                <SingleProjectCard key={project.id} project={project}/>
            ))}
        </ul>
    )
}

export default AllProjectsSection;