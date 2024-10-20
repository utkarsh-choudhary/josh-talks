import React, { useEffect, useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useContextApp } from "@/app/contextApp";

function MoreDropDown() {
  const {
    openDropDownObject: { openDropDown, setOpenDropDown },
    dropDownPositionsObject: { setDropDownPositions, dropDownPositions },
    openConfirmationWindowObject: { setOpenConfirmationWindow }, // Add this line to get the setOpenConfirmationWindow function
  } = useContextApp();

  const [dropDownOptions, setDropDownOptions] = useState([
    { id: 1, name: "Edit", icon: <EditOutlinedIcon /> },
    { id: 2, name: "Delete", icon: <DeleteOutlineOutlinedIcon /> }, // Updated the icon for delete
  ]);

  const menuRef = React.useRef<HTMLDivElement>(null);

  function clickedItemHandler(id: number) {
    if(id===1){
        setOpenConfirmationWindow(true)
    }
    if (id === 2) {
      // Open the window to confirm the deletion
      setOpenConfirmationWindow(true);

      // Close the drop down menu
      setOpenDropDown(false);
    }
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenDropDown(false);
      }
    }

    if (openDropDown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropDown, setOpenDropDown]);

  return (
    <div
      ref={menuRef}
      style={{ top: dropDownPositions.top, left: dropDownPositions.left }}
      className={`bg-white fixed z-[90] top-14 left-24 px-5
            border-slate-50 py-6 w-[130px] select-none
            shadow-md rounded-lg flex flex-col gap-7 ${
              openDropDown ? "block" : "hidden"
            }`}
    >
      {dropDownOptions.map((dropDownOption) => (
        <div
          key={dropDownOption.id}
          onClick={() => clickedItemHandler(dropDownOption.id)} // Fix: Arrow function to pass the id
          className={`flex gap-1 items-center text-slate-800 cursor-pointer
                    hover:text-orange-600 ${
                      dropDownOption.id === 2 && "hover:text-red-600"
                    }`}
        >
          {/* edit icon */}
          {dropDownOption.icon}
          <span className="text-[14px]">{dropDownOption.name}</span>
        </div>
      ))}
    </div>
  );
}

export default MoreDropDown;
