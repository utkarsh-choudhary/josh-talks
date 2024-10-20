import TasksHeader from "./components/TasksHeader";
import TasksList from "./components/TasksList";
import TasksSubHeader from "./components/TasksSubHeader";


function AllTasksContainer(){
    return(
        <div className="bg-slate-50 w-full p-10 max-sm:p-8 max-sm:py-9">
            <TasksHeader/>
            <TasksSubHeader/>
            <TasksList/>
        </div>
    )
}


export default AllTasksContainer;