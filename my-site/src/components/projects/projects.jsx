import * as React from 'react';
import { motion } from "framer-motion";
import chevronLeft from "../../static/chevron-left.svg"
import chevronRight from "../../static/chevron-right.svg"

import { Colors } from '../../utils/colors';
import { minContainerWidth } from '../../constants/constants';
import { ProjectCard } from './project-card';
import { projectsList } from './projects-list';

export const ProjectsContainer = (props) => {
	const { id, containerHeight } = props;

  const [containerWidth, setContainerWidth] = React.useState(window.innerWidth - 15); // -15 to account for scrollbar
	const [currentProject, setCurrentProject] = React.useState(1);

	const selectProject = (moveIndex) => {
		let index = currentProject + moveIndex;

		if (index <= 0 || index > Object.keys(projectsList).length) return;

		setCurrentProject(index);
	}

	return (
		<div
			id={id}
			className="flex max-w-full"
			style={{
				backgroundColor: Colors.GrayDark,
				minWidth: minContainerWidth,
				minHeight: containerHeight,
			}}
		>
			<div className="flex flex-col">
        <div className="flex flex-row px-20 py-10">
					<div className="text-7xl font-bold font-sans" style={{ color: Colors.SunOrange }}>Projects</div>
					<div className="flex ml-auto"></div>
        </div>
				<div className="relative" style={{ width: containerWidth }}>
					<div 
						className="flex flex-row p-10 justify-center"
					>
						<button className="mr-8" onClick={() => selectProject(-1)}>
							<img src={chevronLeft} />
						</button>
						<ProjectCard project={projectsList[currentProject]} />
						<button className="ml-8" onClick={() => selectProject(1)}>
							<img src={chevronRight} />
						</button>
					</div>
				</div>
      </div>
		</div>
	)
}
