import * as React from 'react';
import { motion } from "framer-motion";
import chevronLeft from "../../static/chevron-left.svg"
import chevronRight from "../../static/chevron-right.svg"

import { Colors } from '../../utils/colors';
import { minContainerWidth } from '../../constants/constants';
import { ProjectCard } from './project-card';
import { projectsList } from './projects-list';
import { ProjectsCarousel } from './projects-carousel';

export const ProjectsContainer = (props) => {
	const { id, containerHeight } = props;

  const [containerWidth, setContainerWidth] = React.useState(window.innerWidth - 15); // -15 to account for scrollbar
	const [currentPosition, setCurrentPosition] = React.useState(0);

	const moveLeft = () => {
		setCurrentPosition((currentPosition) => (
			currentPosition === 0 ? Object.keys(projectsList).length - 1 : currentPosition - 1
		))
	}

	const moveRight = () => {
		setCurrentPosition((currentPosition) => (
			currentPosition === Object.keys(projectsList).length - 1 ? 0 : currentPosition + 1
		))
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
						className="flex flex-row p-10 justify-center items-center text-white"
					>
						<motion.div 
							className="flex flex-col justify-center p-8 w-96">
							Name:
							<a 
								href={projectsList[currentPosition].link} 
								target="_blank" rel="noopener noreferrer" 
								className="pb-8 text-xl font-bold">{projectsList[currentPosition].name}</a>
							<p className="flex whitespace-normal">{projectsList[currentPosition].description}</p>
						</motion.div>
						<button className="mr-8" onClick={moveLeft}>
							<img src={chevronLeft} />
						</button>
						<div className="max-w-96">
							<ProjectsCarousel currentPosition={currentPosition}>
								{Object.values(projectsList).map((project) => 
									<a href={projectsList[currentPosition].link} target="_blank" rel="noopener noreferrer">
										<ProjectCard project={project} />
									</a>
								)}
							</ProjectsCarousel>
						</div>
						{/* <ProjectCard project={projectsList[currentProject]} /> */}
						<button className="ml-8" onClick={moveRight}>
							<img src={chevronRight} />
						</button>
						<div className="flex flex-col justify-center p-8 w-96">
							<p className="pb-8">Stack: {projectsList[currentPosition].stack.join(", ")}</p>
							<p className="flex whitespace-normal">{projectsList[currentPosition].additional}</p>
						</div>
					</div>
				</div>
      </div>
		</div>
	)
}
