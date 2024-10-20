import React, { useEffect, useRef } from "react";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContextApp } from "../contextApp";
import { SvgIconProps } from "@mui/material";

function SideBar() {
  // Destructure the relevant context values
  const {
    openSideBarObject: { openSideBar, setOpenSideBar },
    sideBarMenuObject: { sideBarMenu, setSideBarMenu },
  } = useContextApp();

  const sideBarMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sideBarMenuRef.current &&
        !sideBarMenuRef.current.contains(event.target as Node)
      ) {
        setOpenSideBar(false); // Close sidebar on outside click
      }
    }
    if (openSideBar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSideBar, setOpenSideBar]);

  function handleClickedItem(id: number) {
    const updateMenuSideBar = sideBarMenu.map((item) => {
      if (item.id === id) {
        return { ...item, isSelected: true }; // Set clicked item as selected
      }
      return { ...item, isSelected: false }; // Deselect other items
    });
    setSideBarMenu(updateMenuSideBar); // Update the global state
  }

  return (
    <div
      ref={sideBarMenuRef}
      className={`${
        openSideBar ? "w-[280px] fixed shadow-xl" : "w-[97px] max-[940px]:hidden"
      } h-screen py-10 bg-white flex flex-col items-center justify-between z-[90] transition-all`}
    >
      <Logo />
      <Menu handleClickedItem={handleClickedItem} />
      <Profile />
    </div>
  );

  // Profile image component
  function Profile() {
    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-orange-600 rounded-md"></div>
        {openSideBar && (
          <ul>
            <li className="font-bold text-[14px]">Utkarsh Chaudhary</li>
            <li className="text-slate-400 text-[11px]">utkarshchoudhary@gmail.com</li>
          </ul>
        )}
      </div>
    );
  }

  // Menu component for sidebar items
  function Menu({ handleClickedItem }: { handleClickedItem: (id: number) => void }) {
    const iconMap: Record<string, React.ComponentType<SvgIconProps>> = {
      "1": BorderAllIcon,
      "2": SplitscreenIcon,
      "3": LogoutIcon,
    };

    return (
      <div className="flex flex-col gap-6">
        {sideBarMenu.map((menuItem) => {
          const IconComponent = iconMap[menuItem.id.toString()];
          return (
            <div
              onClick={() => handleClickedItem(menuItem.id)}
              key={menuItem.id}
              className="flex items-center gap-2 cursor-pointer"
            >
              <IconComponent
                sx={{ fontSize: "25px" }}
                className={`${
                  menuItem.isSelected ? "text-orange-600" : "text-slate-300"
                }`}
              />
              {openSideBar && (
                <span
                  className={`${
                    menuItem.isSelected ? "text-orange-600" : "text-slate-300"
                  }`}
                >
                  {menuItem.name}
                </span>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  // Logo component
  function Logo() {
    return (
      <div className="flex items-center gap-2 justify-center">
        <img src="/josh.png" className="font-bold text-[41px]" alt="logo" />
        {openSideBar && (
          <div className="text-xl flex items-center gap-1">
            <span className="font-bold">Josh</span>
            <span className="text-slate-600">Talks</span>
          </div>
        )}
      </div>
    );
  }
}

export default SideBar;
