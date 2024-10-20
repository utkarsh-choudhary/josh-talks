import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu"; 
import { useContextApp } from "@/app/contextApp";

function ProjectsHeader() {
    const {
        openProjectWindowObject: { setOpenProjectWindow }
    } = useContextApp();

    return (
        <div className="flex justify-between">
            <SearchBar />
            <AddProjectButton />
        </div>
    );

    function SearchBar() {
        return (
            <div className="flex items-center">
                {/* search icon */}
                <div className="border-b-2 border-orange-600 h-[39px] w-11 justify-center flex items-center">
                    <SearchIcon
                        className="text-slate-400 outline-none"
                        sx={{ fontSize: "26px" }}
                    />
                </div>

                {/* search input */}
                <div className="border-b-2 w-[67%] border-slate-200 ">
                    <input type="text"
                        placeholder="Search a project..."
                        className="p-2 bg-transparent text-[14px] outline-none" />
                </div>
            </div>
        );
    }

    // Add button
    function AddProjectButton() {
        return (
            <div className="flex gap-3 items-center">
                <button
                    onClick={() => setOpenProjectWindow(true)} // Open the project window
                    className="bg-orange-600 text-white px-2 pr-3 text-[14px] rounded-md flex gap-1 items-center max-sm:pr-2"
                >
                    <AddIcon sx={{ fontSize: '22px' }} className="mt-[2px]" />
                    <span className="max-sm:hidden">New Project</span>
                </button>
                <MenuIcon className="text-slate-400 h-9 cursor-pointer hidden max-[940px]:block" />
            </div>
        );
    }
}

export default ProjectsHeader;
