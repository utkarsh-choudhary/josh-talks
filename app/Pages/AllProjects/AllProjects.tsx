import AllProjectsSection from "./components/AllProjectsSection";
import ProjectsHeader from "./components/ProjectsHeader";
import ProjectsSubHeader from "./components/ProjectsSubHeader";
import StatsRightSideBar from "./components/StatsRightSideBar";


function AllProjects(){
    return (
        <div className="bg-slate-50 w-full flex-grow overflow-auto flex">
            <AllProjectsArea/>
            <StatsRightSideBar/>
        </div>

    )

    function AllProjectsArea(){
        return(
            <div className="w-[78%] p-10 flex flex-col gap-3 border">
                <ProjectsHeader/>

                <ProjectsSubHeader/>

               <AllProjectsSection/>
            </div>
        )
    }
}

export default AllProjects;