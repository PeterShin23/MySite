import * as React from "react";

export const HeaderButton = (props) => {
  const { tabName, tabEnumValue, isCurrentTab, handleTabClick } = props;

  return (
    <button 
      className={`flex mr-4 items-center ${isCurrentTab ? "border-b-4 py-4" : ""}`}
      onClick={() => handleTabClick(tabEnumValue)}>{tabName}</button>
  )
}