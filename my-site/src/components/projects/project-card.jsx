import * as React from "react";

export const ProjectCard = (props) => {
  const { project } = props;

  const cardRef = React.useRef(null);

  return (
    <div ref={cardRef} className="flex flex-col border-2 p-4 rounded-lg shadow-lg cursor-pointer size-96">
      <p>{project.name}</p>
      <p class="text-sm">{`Using: ${project.stack.join(", ")}`}</p>
		</div>
  )
}