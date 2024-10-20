"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { AppType, IconData, SidebarMenuItem } from "./types/AppType";
import { allIconsArray } from "./Data/AllIcons";
import { Project, projectsData } from "./Data/AllProjects";

// Setting the default state
const defaultState: AppType = {
    openSideBarObject: { openSideBar: false, setOpenSideBar: () => {} },
    sideBarMenuObject: { sideBarMenu: [], setSideBarMenu: () => {} },
    openProjectWindowObject: { openProjectWindow: false, setOpenProjectWindow: () => {} },
    allIconsDataObject: { allIconsData: [], setAllIconsData: () => {} },
    openIconWindowObject: { openIconWindow: false, setOpenIconWindow: () => {} },
    selectedIconObject: { selectedIcon: null, setSelectedIcon: () => {} },
    allProjectsObject: { allProjects: [], setAllProjects: () => {} },
    dropDownPositionsObject: { dropDownPositions: { top: 0, left: 0 }, setDropDownPositions: () => {} },
    openDropDownObject: { openDropDown: false, setOpenDropDown: () => {} },
    selectedProjectObject: { selectedProject: null, setSelectedProject: () => {} },
    openConfirmationWindowObject: { openConfirmationWindow: false, setOpenConfirmationWindow: () => {} },
};

// Creating the context
const ContextApp = createContext<AppType>(defaultState);

// Creating the provider
export default function ContextAppProvider({ children }: { children: ReactNode }) {
    const [openSideBar, setOpenSideBar] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const [sideBarMenu, setSideBarMenu] = useState<SidebarMenuItem[]>([
        { id: 1, name: "All Projects", isSelected: true },
        { id: 2, name: "All Tasks", isSelected: false },
        { id: 3, name: "Logout", isSelected: false },
    ]);

    const [openProjectWindow, setOpenProjectWindow] = useState(false);
    const [allIconsData, setAllIconsData] = useState<IconData[]>(allIconsArray);
    const [openIconWindow, setOpenIconWindow] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState<IconData | null>(null);
    const [allProjects, setAllProjects] = useState<Project[]>([]);
    const [openDropDown, setOpenDropDown] = useState(false);
    const [dropDownPositions, setDropDownPositions] = useState({ top: 0, left: 0 });
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [openConfirmationWindow, setOpenConfirmationWindow] = useState<boolean>(false);

    // Updating the window size for mobile view
    useEffect(() => {
        function handleResize() {
            setIsMobileView(window.innerWidth <= 940);
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Simulate the fetching of projects
    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                setAllProjects(projectsData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    // Close the sidebar when the mobile view is false
    useEffect(() => {
        if (!isMobileView) {
            setOpenSideBar(false);
        }
    }, [isMobileView]);

    useEffect(() => {
        setOpenSideBar(false);
    }, [sideBarMenu]);

    return (
        <ContextApp.Provider
            value={{
                openSideBarObject: { openSideBar, setOpenSideBar },
                sideBarMenuObject: { sideBarMenu, setSideBarMenu },
                openProjectWindowObject: { openProjectWindow, setOpenProjectWindow },
                allIconsDataObject: { allIconsData, setAllIconsData },
                openIconWindowObject: { openIconWindow, setOpenIconWindow },
                selectedIconObject: { selectedIcon, setSelectedIcon },
                allProjectsObject: { allProjects, setAllProjects },
                dropDownPositionsObject: { dropDownPositions, setDropDownPositions },
                openDropDownObject: { openDropDown, setOpenDropDown },
                selectedProjectObject: { selectedProject, setSelectedProject },
                openConfirmationWindowObject: { openConfirmationWindow, setOpenConfirmationWindow },
            }}
        >
            {children}
        </ContextApp.Provider>
    );
}

// Creating the hook
export function useContextApp() {
    return useContext(ContextApp);
}
