import { Colors } from "../utils/colors";
import * as React from "react";

export const HeaderButton = (props) => {
  const { tabName, tabEnumValue, isCurrentTab, handleTabClick } = props;

  return (
    <button 
      className={`flex mr-4 items-center ${isCurrentTab ? "font-semibold py-4" : ""}`}
      style={{ 
        color: isCurrentTab ? Colors.Wenge : Colors.WengeLight,
        borderBottomWidth: isCurrentTab ? 4 : undefined,
        borderBottomColor: isCurrentTab ? Colors.Wenge : undefined
      }}
      onClick={() => handleTabClick(tabEnumValue)}>{tabName}</button>
  )
}