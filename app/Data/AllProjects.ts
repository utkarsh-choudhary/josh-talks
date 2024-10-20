import {v4 as uuidv4} from"uuid";



//define the structure for a task
export type Task = {
    id: string;
    title: string; 
    icon: string;
    projectName: string;
    status: "In Progress" | "Completed";
    priority: "Low" | "Medium" | "High";
    createdAt: string;
    updatedAt: string;
}

//define the structure for a project
export type Project = {
    id: string;
    clerkUserId: string;
    title:string;
    createdAt: string;
    updatedAt: string;
    icon: string;


    tasks: Task[];
}


//sample data with three tasks
export const projectsData: Project [] = [
    {
    id:uuidv4(),
    clerkUserId:"123",
    title:"Project Title",
    createdAt:"2024-08-26T10:00:00Z",
    updatedAt:"2024-08-28T14:30:00Z",
    icon:"LocalLibrary",

    tasks:[
        {
            id: uuidv4(),
            title: "Create the UI Design of the task", 
            icon: "Movie", 
            projectName: "Project",
            status: "In Progress", 
            priority: "Low", 
            createdAt: "2024-08-26T10:00:00Z" ,
            updatedAt: "2024-08-28T14:30:00Z",
        },
        {
            id: uuidv4(),
            title: "Develop the Backend API", 
            icon: "Code" ,
            projectName: "Project",
            status: "In Progress", 
            priority: "High", 
            createdAt: "2024-08-26T11:00:00Z" ,
            updatedAt: "2024-08-28T15:00:00Z",
        },
        
        {
            id: uuidv4(),
            title: "Fix Bugs in Payment System", 
            icon: "BugReport", 
            projectName: "Payment",
            status: "In Progress", 
            priority: "High", 
            createdAt: "2024-08-26T14:00:00Z", 
            updatedAt: "2024-08-29T16:00:00Z",
        },
        {
            id: uuidv4(),
            title: "Update the User Profile Page", 
            icon: "Person", 
            projectName: "Profile",
            status: "Completed", 
            priority: "Low", 
            createdAt: "2024-08-24T13:30:00Z", 
            updatedAt: "2024-08-28T15:30:00Z",
        },
        {
            id: uuidv4(),
            title: "Optimize Frontend Performance", 
            icon: "Speed", 
            projectName: "Optimization",
            status: "In Progress", 
            priority: "Medium", 
            createdAt: "2024-08-25T08:00:00Z", 
            updatedAt: "2024-08-27T14:00:00Z",
        },
        
        {
            id: uuidv4(),
            title: "Integrate Google Maps API", 
            icon: "Map", 
            projectName: "Location",
            status: "In Progress", 
            priority: "High", 
            createdAt: "2024-08-27T12:00:00Z", 
            updatedAt: "2024-08-30T11:00:00Z",
        },
        {
            id: uuidv4(),
            title: "Prepare Project Documentation", 
            icon: "LibraryBooks", 
            projectName: "Documentation",
            status: "Completed", 
            priority: "Medium", 
            createdAt: "2024-08-22T10:00:00Z", 
            updatedAt: "2024-08-25T09:00:00Z",
        },
        {
            id: uuidv4(),
            title: "Create Test Cases for API", 
            icon: "Science", 
            projectName: "Testing",
            status: "In Progress", 
            priority: "High", 
            createdAt: "2024-08-26T10:30:00Z", 
            updatedAt: "2024-08-28T11:00:00Z",
        },
    ]
}
]
