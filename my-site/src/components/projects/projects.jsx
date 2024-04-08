import * as React from 'react';
import { motion } from "framer-motion";

import { Colors } from '../../utils/colors';
import { minContainerWidth } from '../../constants/constants';

export const ProjectsContainer = (props) => {
    const { id, containerHeight } = props;

    return (
        <div
            id={id}
            name="container"
            className="container flex flex-row max-w-full"
            style={{
                backgroundColor: Colors.EnglishVioletLight,
                minWidth: minContainerWidth,
                minHeight: containerHeight,
            }}
        >
            
        </div>
    )
}
