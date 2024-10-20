import { useContextApp } from "@/app/contextApp"; // Ensure correct import path
import { deleteProject } from "@/app/Functions/projectsActions";
import React, { useState } from "react";
import toast from "react-hot-toast";

function ConfirmationWindow() {
  const [loading, setLoading] = useState(false);

  // Destructure the necessary values from the context
  const {
    openConfirmationWindowObject: {
      openConfirmationWindow,
      setOpenConfirmationWindow,
    },
    selectedProjectObject: {
      selectedProject, // Get selectedProject here
      setSelectedProject,
    },
    allProjectsObject:{
    allProjects, // Ensure this is defined in your context
    setAllProjects}, // Ensure this is defined in your context
  } = useContextApp();

  function closeConfirmationWindow() {
    setOpenConfirmationWindow(false);
    setSelectedProject(null);
  }

  async function deleteFunction() {
    try {
      // Set loading to true
      setLoading(true);

      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Call deleteProject function with the correct parameters
      deleteProject(
        selectedProject, 
        setSelectedProject, 
        allProjects, 
        setAllProjects,
        setOpenConfirmationWindow
      );

      toast.success("Project deleted successfully");
    } catch (error) {
      console.log(error);
    //   toast.error("Something went wrong");
    } finally {
      setLoading(false);
      setOpenConfirmationWindow(false);
    }
  }

  return (
    <div
      className={`w-[38%] bg-white max-sm:w-[91%] max-lg:w-[80%] p-6 fixed shadow-md z-[90] rounded-lg flex items-center top-[30%] left-1/2 -translate-x-1/2 ${
        openConfirmationWindow ? "block" : "hidden"
      }`}
    >
      <div className="rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-5">Delete Project</h2>
        <p className={`text-gray-600 mb-4 text-sm`}>
          Are you sure you want to remove this project? This action cannot be undone, and will remove all projects associated with it.
        </p>

        <div className="flex justify-end gap-2 mt-10 text-[13px]">
          <button
            onClick={closeConfirmationWindow}
            className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={deleteFunction}
            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg text-white"
            disabled={loading} // Disable the button while loading
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationWindow;
