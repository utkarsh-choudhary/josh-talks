import { Project } from "../Data/AllProjects";

export type SidebarMenuItem = {
    id: number;
    name: string;
    isSelected: boolean;
}

export interface IconData {
    id: number;
    name: string;
    icon: React.ReactNode;
    isSelected: boolean;
}

// In ProjectWindow.tsx
export interface FormData {
    projectName: string; // Adjust according to your actual FormData structure
    // Add other properties as needed
  }
  
export type AppType = {
    openSideBarObject: {
        openSideBar: boolean;
        setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
    };

    sideBarMenuObject: {
        sideBarMenu: SidebarMenuItem[];
        setSideBarMenu: React.Dispatch<React.SetStateAction<SidebarMenuItem[]>>;
    };

    openProjectWindowObject: {
        openProjectWindow: boolean;
        setOpenProjectWindow: React.Dispatch<React.SetStateAction<boolean>>;
    };

    allIconsDataObject: {
        allIconsData: IconData[];
        setAllIconsData: React.Dispatch<React.SetStateAction<IconData[]>>;
    };

    openIconWindowObject: {
        openIconWindow: boolean;
        setOpenIconWindow: React.Dispatch<React.SetStateAction<boolean>>;
    };

    selectedIconObject: {
        selectedIcon: IconData | null;
        setSelectedIcon: React.Dispatch<React.SetStateAction<IconData | null>>;
    };

    allProjectsObject: {
        allProjects: Project[];
        setAllProjects: React.Dispatch<React.SetStateAction<Project[]>>;
    };

    dropDownPositionsObject: {
        dropDownPositions: { top: number; left: number };
        setDropDownPositions: React.Dispatch<React.SetStateAction<{ top: number; left: number }>>;
    };

    openDropDownObject: {
        openDropDown: boolean;
        setOpenDropDown: React.Dispatch<React.SetStateAction<boolean>>;
    };

    selectedProjectObject: {
        selectedProject: Project | null;
        setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>;
    };

    openConfirmationWindowObject: {
        openConfirmationWindow: boolean;
        setOpenConfirmationWindow: React.Dispatch<React.SetStateAction<boolean>>;
    };
}
