import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import CloseIcon from "@mui/icons-material/Close"; 
import AllIcons from "@/app/Data/AllIcons";
import { useContextApp } from "@/app/contextApp"; // Import your context

function IconsWindow() {
  const { 
    openIconWindowObject: { openIconWindow, setOpenIconWindow } 
  } = useContextApp(); // Get from context

  // Conditional rendering: Only render the window if openIconWindow is true
  if (!openIconWindow) return null;

  return (
    <div
      className={`
        absolute p-3 h-[530px] w-[50%] max-sm:w-[90%] bg-white shadow-md left-1/2
        top-28 rounded-lg -translate-x-1/2 z-[60]
      `}
    >
      {/* Header */}
      <Header setOpenIconWindow={setOpenIconWindow} />

      <span className="mx-8 text-[13px] mt-12 text-slate-400">
        {`Please select the icons you'd like to use from the collection below:`}
      </span>

      {/* All Icons Area */}
      <IconsArea />
    </div>
  );
}

export default IconsWindow;

function Header({ setOpenIconWindow }: { setOpenIconWindow: (value: boolean) => void }) {
  return (
    <div className="flex justify-between items-center pt-7 px-7 mb-8">
      <div className="flex items-center gap-2">
        {/* Icons */}
        <div className="p-2 bg-orange-200 rounded-lg flex items-center justify-center">
          <AppsIcon
            sx={{ fontSize: 21 }}
            className="text-orange-400 text-[17px]"
            onClick={() => setOpenIconWindow(false)} // Close the window
          />
        </div>
        {/* Header */}
        <span className="font-semibold text-lg">All Icons</span>
      </div>
      {/* Close button */}
      <CloseIcon
        className="text-slate-400 text-[18px] cursor-pointer"
        onClick={() => setOpenIconWindow(false)} // Close the window
      />
    </div>
  );
}

function IconsArea() {
  return (
    <div className="w-full flex flex-col items-center mt-3">
      <div className="border border-slate-100 w-[92%] h-[330px] overflow-auto rounded-md bg-slate-100">
        <AllIcons />
      </div>
    </div>
  );
}
