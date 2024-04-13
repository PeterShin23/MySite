import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ProjectCard = (props) => {
  const { project } = props;

  const cardRef = React.useRef(null);

  return (
    <div>
      <div ref={cardRef} className="relative flex flex-col shadow-lg cursor-pointer size-96 bg-white">
        <img className="size-full" src={project.picture} />
      </div>
    </div>
  )
}