import * as React from "react";
import {Cloud, renderSimpleIcon, SimpleIcon} from "react-icon-cloud"
import { skills } from "./skills";

export const SkillsCloud = () => {

  const onSkillClick = (e, infoLink) => {
    e.preventDefault();

    setTimeout(() => window.open(infoLink, "_blank", "noreferrer,noopener"), 500);
  }

  return (
    <Cloud 
      canvasProps={{
        className: "flex mx-8",
        style: { width: "100%", maxWidth: "84%"}
      }}
      // https://www.goat1000.com/tagcanvas-options.php
      options={{
        outlineColour: "#0000",
        clickToFront: 500,
        wheelZoom: false,
        initial: [0.05, -0.05],
        dragControl: true,
        minSpeed: 0.01,
        imageRadius: 20,
        shuffleTags: true,
      }}>
      {
        skills.map((skill) => (
          <a 
            key={skill.name} 
            onClick={(e) => onSkillClick(e, skill.info)}
          >
            <img className="focus-ring:none" src={skill.svg} />
          </a>
        ))
      }
    </Cloud>
  )
}

/** Memoized skills component to prevent unnecessary rerender of skills cloud and awkward movement stopping */
export const MemoizedSkillsCloud = React.memo(SkillsCloud);