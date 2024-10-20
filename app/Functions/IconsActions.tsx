import React from "react";
import { 
  AccountBalance, AccountCircle, Alarm, Build, CameraAlt, CheckCircle, Cloud, Dashboard, DensitySmall, DirectionsCar, EmojiEmotions, Event, Favorite, FitnessCenter, Flight, HomeMax, Language, Lightbulb, LocalDining, MusicNote, Notifications, People, Person, Phone, Search, Settings, ShoppingCart, Star, ThumbUp, Visibility 
} from "@mui/icons-material";

export const getIconComponent = (
  iconName: string,
  textColor?: string,
  fontSize?: string
): JSX.Element | null => {  // Allow JSX.Element or null as return type
  const defaultFontSize = "27px";
  const defaultTextColor = "text-orange-600";

  const iconProps = {
    sx: { fontSize: fontSize || defaultFontSize },
    className: `${defaultTextColor} ${textColor || ""}`.trim(),  // Fix "className" typo
  };

  switch (iconName) {
    case "DensitySmall":
      return <DensitySmall {...iconProps} />;
    case "AccountBalance":
      return <AccountBalance {...iconProps} />;
    case "AccountCircle":
      return <AccountCircle {...iconProps} />;
    case "Alarm":
      return <Alarm {...iconProps} />;
    case "Build":
      return <Build {...iconProps} />;
    case "CameraAlt":
      return <CameraAlt {...iconProps} />;
    case "CheckCircle":
      return <CheckCircle {...iconProps} />;
    case "Cloud":
      return <Cloud {...iconProps} />;
    case "Dashboard":
      return <Dashboard {...iconProps} />;
    case "DirectionsCar":
      return <DirectionsCar {...iconProps} />;
    case "EmojiEmotions":
      return <EmojiEmotions {...iconProps} />;
    case "Event":
      return <Event {...iconProps} />;
    case "Favorite":
      return <Favorite {...iconProps} />;
    case "FitnessCenter":
      return <FitnessCenter {...iconProps} />;
    case "Flight":
      return <Flight {...iconProps} />;
    case "Home":
      return <HomeMax {...iconProps} />;
    case "Language":
      return <Language {...iconProps} />;
    case "Lightbulb":
      return <Lightbulb {...iconProps} />;
    case "LocalDining":
      return <LocalDining {...iconProps} />;
    case "MusicNote":
      return <MusicNote {...iconProps} />;
    case "Notifications":
      return <Notifications {...iconProps} />;
    case "People":
      return <People {...iconProps} />;
    case "Person":
      return <Person {...iconProps} />;
    case "Phone":
      return <Phone {...iconProps} />;
    case "Search":
      return <Search {...iconProps} />;
    case "Settings":
      return <Settings {...iconProps} />;
    case "Star":
      return <Star {...iconProps} />;
    case "ShoppingCart":
      return <ShoppingCart {...iconProps} />;
    case "ThumbUp":
      return <ThumbUp {...iconProps} />;
    case "Visibility":
      return <Visibility {...iconProps} />;
    default:
      return null;  // Fallback to null if no matching icon is found
  }
};
