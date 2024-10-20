"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useContextApp } from "@/app/contextApp";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { useForm, SubmitHandler, UseFormRegister, FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { getIconComponent } from "@/app/Functions/IconsActions";
import { addNewProject } from "@/app/Functions/projectsActions";
import { allIconsArray } from "@/app/Data/AllIcons";

// Define validation schema
const schema = z.object({
  projectName: z
    .string()
    .min(1, { message: "Project name is required" })
    .max(30, { message: "Project name must be 30 characters or less" })
});

// Correct type name to match schema
type FormData = z.infer<typeof schema>;

export function ProjectWindow() {
  const {
    openProjectWindowObject: { openProjectWindow, setOpenProjectWindow },
    allProjectsObject: { allProjects, setAllProjects },
    selectedIconObject: { selectedIcon, setSelectedIcon },
    selectedProjectObject: { selectedProject, setSelectedProject },
  } = useContextApp();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
    setFocus,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // on submit function
  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    const existingProject = allProjects.find(
      (project) => project.title.toLowerCase() === data.projectName.toLowerCase()
    );

    if (existingProject && !selectedProject) {
      setError("projectName", {
        type: "manual",
        message: "Project already exists",
      });
      setFocus("projectName");
    } else {
      if (selectedProject) {
        // Update the existing project
        const updatedProject = {
          ...selectedProject,
          title: data.projectName,
          icon: selectedIcon?.name || "LocalLibrary",
          updatedAt: new Date().toISOString(),
        };
        setAllProjects((prevProjects) =>
          prevProjects.map((project) =>
            project.id === selectedProject.id ? updatedProject : project
          )
        );
        setSelectedProject(null); // Clear the selected project after update
      } else {
        // Call the addNewProject function, if everything is valid
        addNewProject(
          data,
          allProjects,
          setAllProjects,
          setOpenProjectWindow,
          selectedIcon,
          reset
        );
      }
      handleClose(); // Close the window after submission
    }
  };

  const handleClose = () => {
    console.log("Closing window and resetting form");
    setSelectedProject(null); // Reset selected project
    setOpenProjectWindow(false);
    reset();
  };

  useLayoutEffect(() => {
    if (openProjectWindow) {
      if (!selectedProject) {
        console.log("Window opened, resetting form");
        reset();
      } else {
        setValue("projectName", selectedProject.title);

        const findIconInAllIconArray = allIconsArray.find(
          (icon) => icon.name === selectedProject.icon
        );
        if (findIconInAllIconArray) {
          setSelectedIcon(findIconInAllIconArray);
        }
      }
    }
  }, [openProjectWindow, reset, selectedProject]);

  return (
    <div
      className={`${
        openProjectWindow ? "block" : "hidden"
      } w-[48%] max-sm:w-[82%] max-[600px]:w-[93%] z-[80] p-3 left-1/2 top-[47%] -translate-y-1/2
      -translate-x-1/2 absolute flex flex-col gap-3 border border-slate-50 bg-white rounded-lg shadow-md`}
    >
      {/* Header */}
      <Header handleClose={handleClose} />

      {/* Body */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 pt-8 px-7 mt-3">
        {/* Project Input */}
        <ProjectInput register={register} errors={errors} />
        {/* Footer */}
        <Footer handleClose={handleClose} />
      </form>
    </div>
  );
}

function Header({ handleClose }: { handleClose: () => void }) {
  const { selectedIconObject: { setSelectedIcon },
    selectedProjectObject: { selectedProject } } = useContextApp();

  console.log("Header rendered");

  return (
    <div className="flex justify-between items-center pt-7 px-7">
      <div className="flex items-center gap-2">
        {/* Project icon */}
        <div className="p-[7px] bg-orange-200 rounded-lg flex items-center justify-center">
          <BorderAllIcon sx={{ fontSize: "21px" }} className="text-orange-600" />
        </div>
        {/* Project header */}
        <span className="font-semibold text-lg">{selectedProject ? "Edit Project" : "New Project"}</span>
      </div>
      <CloseOutlinedIcon
        sx={{ fontSize: "18px" }}
        className="text-slate-300 cursor-pointer"
        onClick={() => {
          console.log("Close icon clicked");
          setSelectedIcon(null);
          handleClose();
        }}
      />
    </div>
  );
}

function ProjectInput({
  register,
  errors,
}: {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}) {
  const {
    openProjectWindowObject: { openProjectWindow },
    selectedIconObject: { selectedIcon },
    openIconWindowObject: { setOpenIconWindow }
  } = useContextApp();

  useEffect(() => {
    if (openProjectWindow) {
      const inputElement = document.querySelector<HTMLInputElement>('input[name="projectName"]');
      if (inputElement) {
        inputElement.focus();
      }
    }
  }, [openProjectWindow]);

  return (
    <div className="flex flex-col gap-2">
      <span className="text-[14px] font-medium text-slate-600">Project name</span>
      <div className="flex gap-3 justify-between">
        {/* Input field */}
        <div className="w-full">
          <input
            {...register("projectName")}
            placeholder="Enter Project Name..."
            className="p-[10px] text-[13px] w-full rounded-md border outline-none"
          />
          {errors.projectName && (
            <p className="text-[11px] mt-2 text-red-500">{errors.projectName.message}</p>
          )}
        </div>

        {/* Icon */}
        <div
          onClick={() => setOpenIconWindow(true)}
          className="w-12 h-10 text-white flex items-center justify-center bg-orange-600 rounded-lg
        cursor-pointer"
        >
          {selectedIcon ? (
            getIconComponent(selectedIcon?.name, "text-white")
          ) : (
            <LibraryBooksIcon />
          )}
        </div>
      </div>
    </div>
  );
}

function Footer({ handleClose }: { handleClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const {
    selectedIconObject: { setSelectedIcon },
    selectedProjectObject: { selectedProject }
  } = useContextApp();
  console.log("footer rendered");

  return (
    <div className="w-[102%] p-[12px] mt-8 mb-4 flex gap-3 justify-end items-center">
      {/* Cancel button */}
      <button
        type="button"
        onClick={() => {
          console.log("Cancel button clicked");
          setSelectedIcon(null);
          handleClose();
        }}
        className="border border-slate-200 text-slate-400 text-[13px] p-2 px-6 rounded-md hover:border-slate-300 transition-all"
      >
        Cancel
      </button>

      {/* Submit button */}
      <button
        type="submit"
        className="bg-orange-600 hover:bg-orange-700 text-white text-[13px] p-2 px-4 rounded-md transition-all"
      >
        {loading ? "Saving..." : selectedProject ? "Update Project" : "Add Project"}
      </button>
    </div>
  );
}
