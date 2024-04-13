import * as React from "react";

export const ProjectsCarousel = ({ children: projects, currentPosition }) => {


  return (
    <div className="overflow-hidden">
      <div 
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentPosition* 100}%)`}}>{projects}</div>
    </div>
  )
}