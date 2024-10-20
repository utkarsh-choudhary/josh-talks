import React, { Dispatch, SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";
import { Project } from "@/app/Data/AllProjects";
import { IconData } from "@/app/types/AppType";
import { FormData } from "@/app/types/AppType";

export function addNewProject(
  data: FormData,
  allProjects: Project[],
  setAllProjects: Dispatch<SetStateAction<Project[]>>,
  setOpenProjectWindow: Dispatch<SetStateAction<boolean>>,
  selectedIcon: IconData | null,
  reset: () => void // Corrected type for reset function
) {
  try {
    const newProject: Project = {
      id: uuidv4(),
      title: data.projectName,
      icon: selectedIcon?.name || "LocalLibrary",
      tasks: [],
      clerkUserId: "123",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    // Add the new project to the list of all projects
    setAllProjects([...allProjects, newProject]);
    // Close the project window
    setOpenProjectWindow(false);
    // Reset the form
    reset();
  } catch (error) {
    console.error("Error adding new project:", error);
  }
}

export function deleteProject(
  selectedProject: Project | null,
  setSelectedProject: Dispatch<SetStateAction<Project | null>>,
  allProjects: Project[],
  setAllProjects: Dispatch<SetStateAction<Project[]>>,
  setOpenConfirmationWindow: Dispatch<SetStateAction<boolean>>
) {
  if (selectedProject) {
    // Filter out the selected project from the list of all projects
    const updatedAllProjects = allProjects.filter(
      (project) => project.id !== selectedProject.id
    );
    // Update the state with the remaining projects
    setAllProjects(updatedAllProjects);
    // Clear the selected project
    setSelectedProject(null);
    // Close the confirmation window
    setOpenConfirmationWindow(false);
  } else {
    console.error("No project selected for deletion");
  }
}

