"use client";
import { ToastBar } from "react-hot-toast";
import MoreDropDown from "./components/DropDowns/MoreDropDown";
import SideBar from "./components/SideBar";
import ConfirmationWindow from "./components/Windows/ConfirmationWindow";
import IconsWindow from "./components/Windows/IconWindow";
import { ProjectWindow } from "./components/Windows/ProjectWindow";
import { useContextApp } from "./contextApp";
import AllProjects from "./Pages/AllProjects/AllProjects";
import AllTasksContainer from "./Pages/AllTasks/AllTasks";

export default function Home() {
  const {
    openSideBarObject: { openSideBar },
    sideBarMenuObject: { sideBarMenu },
    openProjectWindowObject: { openProjectWindow },
    openConfirmationWindowObject: { openConfirmationWindow },
  } = useContextApp();

  // Mapping the selected sidebar menu item to a component
  const componentMap: Record<number, React.ReactNode> = {
    1: <AllProjects />,
    2: <AllTasksContainer />,
  };

  // Find the currently selected sidebar menu item
  const componentKey = sideBarMenu.findIndex((item) => item.isSelected);
  const selectedComponent = componentMap[componentKey + 1] || null;

  return (
    <div className="flex w-full h-screen poppins relative">
      {/* Toast notification */}
      {/* <ToastBar/> */}

      {/* Components like Confirmation, MoreDropDown, and Windows */}
      <ConfirmationWindow />
      <MoreDropDown />
      <IconsWindow />
      <ProjectWindow />

      {/* Overlay when SideBar, ProjectWindow, or ConfirmationWindow is open */}
      {(openSideBar || openProjectWindow || openConfirmationWindow) && (
        <div
          className={`w-full h-full ${
            openProjectWindow || openConfirmationWindow ? "z-[70]" : "z-50"
          } bg-slate-800 fixed opacity-30`}
        ></div>
      )}

      {/* Sidebar */}
      <SideBar />

      {/* Render selected component based on the sidebar menu selection */}
      <div className={`flex-grow ${openSideBar ? "ml-[280px]" : "ml-[97px]"}`}>
        {selectedComponent}
      </div>
    </div>
  );
}
