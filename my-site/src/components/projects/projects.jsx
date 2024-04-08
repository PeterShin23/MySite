import * as React from 'react';
import { motion } from "framer-motion";

import { Colors } from '../../utils/colors';
import { minContainerWidth } from '../../constants/constants';

export const ProjectsContainer = (props) => {
	const { id, containerHeight } = props;

	return (
		<div
			id={id}
			className="container flex flex-row max-w-full"
			style={{
				backgroundColor: Colors.GrayDark,
				minWidth: minContainerWidth,
				minHeight: containerHeight,
			}}
		>
			<div className="flex">
				<div className="flex px-20 pt-10 text-7xl font-bold font-sans" style={{ color: Colors.SunOrange }}>Projects</div>
			</div>
		</div>
	)
}
