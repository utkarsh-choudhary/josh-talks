import React, { useEffect } from "react";
import {
  AccountBalance,
  AccountCircle,
  Alarm,
  Build,
  CameraAlt,
  CheckCircle,
  Cloud,
  Dashboard,
  DirectionsCar,
  EmojiEmotions,
  Event,
  Favorite,
  FitnessCenter,
  Flight,
  HomeMax,
  Language,
  Lightbulb,
  LocalDining,
  MusicNote,
  Notifications,
  People,
  Person,
  Phone,
  Search,
  Settings,
} from "@mui/icons-material";
import { useContextApp } from "../contextApp"; // Assuming this is where your context is defined
import { IconData } from "../types/AppType";

// Define the array of all icons (assuming it's here in the same file)
export const allIconsArray: IconData[] = [
  { id: 1, icon: <AccountBalance className="text-[23px]" />, name: "AccountBalance", isSelected: false },
  { id: 2, icon: <AccountCircle className="text-[23px]" />, name: "AccountCircle", isSelected: false },
  { id: 3, icon: <Alarm className="text-[23px]" />, name: "Alarm", isSelected: false },
  { id: 4, icon: <Build className="text-[23px]" />, name: "Build", isSelected: false },
  { id: 5, icon: <CameraAlt className="text-[23px]" />, name: "CameraAlt", isSelected: false },
  { id: 6, icon: <CheckCircle className="text-[23px]" />, name: "CheckCircle", isSelected: false },
  { id: 7, icon: <Cloud className="text-[23px]" />, name: "Cloud", isSelected: false },
  { id: 8, icon: <Dashboard className="text-[23px]" />, name: "Dashboard", isSelected: false },
  { id: 9, icon: <DirectionsCar className="text-[23px]" />, name: "DirectionsCar", isSelected: false },
  { id: 10, icon: <EmojiEmotions className="text-[23px]" />, name: "EmojiEmotions", isSelected: false },
  { id: 11, icon: <Event className="text-[23px]" />, name: "Event", isSelected: false },
  { id: 12, icon: <Favorite className="text-[23px]" />, name: "Favorite", isSelected: false },
  { id: 13, icon: <FitnessCenter className="text-[23px]" />, name: "FitnessCenter", isSelected: false },
  { id: 14, icon: <Flight className="text-[23px]" />, name: "Flight", isSelected: false },
  { id: 15, icon: <HomeMax className="text-[23px]" />, name: "HomeMax", isSelected: false },
  { id: 16, icon: <Language className="text-[23px]" />, name: "Language", isSelected: false },
  { id: 17, icon: <Lightbulb className="text-[23px]" />, name: "Lightbulb", isSelected: false },
  { id: 18, icon: <LocalDining className="text-[23px]" />, name: "LocalDining", isSelected: false },
  { id: 19, icon: <MusicNote className="text-[23px]" />, name: "MusicNote", isSelected: false },
  { id: 20, icon: <Notifications className="text-[23px]" />, name: "Notifications", isSelected: false },
  { id: 21, icon: <People className="text-[23px]" />, name: "People", isSelected: false },
  { id: 22, icon: <Person className="text-[23px]" />, name: "Person", isSelected: false },
  { id: 23, icon: <Phone className="text-[23px]" />, name: "Phone", isSelected: false },
  { id: 24, icon: <Search className="text-[23px]" />, name: "Search", isSelected: false },
  { id: 25, icon: <Settings className="text-[23px]" />, name: "Settings", isSelected: false },
];

export default function AllIcons() {
  const {
    allIconsDataObject: { allIconsData, setAllIconsData },
    selectedIconObject: { setSelectedIcon },
    openIconWindowObject: { setOpenIconWindow, openIconWindow }, // track the open state
  } = useContextApp();

  // Function to handle icon selection
  function handleTheIconSelection(singleIcon: IconData) {
    setAllIconsData((prevIcons) =>
      prevIcons.map((icon) => {
        if (icon.name === singleIcon.name) {
          setSelectedIcon(singleIcon); // Set the selected icon
          return { ...icon, isSelected: true }; // Mark the selected icon
        }
        return { ...icon, isSelected: false }; // Deselect others
      })
    );

    // Close the icon window after selection
    setOpenIconWindow(false);
  }

  // Use effect to track window close functionality and log for debugging
  useEffect(() => {
    console.log("Icon window open state: ", openIconWindow);
  }, [openIconWindow]);

  return (
    <div className="flex flex-wrap gap-2 text-orange-600 p-3">
      {allIconsData.map((singleIcon, index) => (
        <div
          key={index}
          onClick={() => handleTheIconSelection(singleIcon)}
          className={`w-9 h-9 shadow-sm border border-slate-50 flex items-center justify-center rounded-lg hover:bg-orange-600 hover:text-white ${
            singleIcon.isSelected ? "bg-orange-600 text-white" : "bg-white text-orange-600"
          }`}
        >
          {singleIcon.icon}
        </div>
      ))}
    </div>
  );
}
