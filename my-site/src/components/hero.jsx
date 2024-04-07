import * as React from 'react';
import { motion } from "framer-motion";

import { Colors } from '../utils/colors';
import github from '../static/github.svg';
import linkedin from '../static/linkedin.svg';
import { minContainerWidth } from '../constants/constants';
import { MemoizedSkillsCloud } from './skills/skills-cloud';

export const HeroContainer = (props) => {
    const { containerHeight } = props;

    return (
        <div
            className="container flex flex-row max-w-full"
            style={{
                backgroundColor: Colors.TeaGreen,
                minWidth: minContainerWidth,
                minHeight: containerHeight,
            }}
        >
            <motion.div 
                className="flex flex-col w-1/2 justify-center"
                initial={{ x: -500 }} // Initial position (left)
                animate={{ x: 0 }}    // Final position (right)
                transition={{ duration: 1 }} 
            >
                <div className="flex flex-row justify-center text-9xl font-bold font-sans"
                >
                    <div className="text-slate-200">Peter</div>
                    <div className="text-slate-500">Shin</div>
                </div>
                <div className="flex flex-row justify-center items-center">
                    {/* add a copy to clipboard feature with a toast message*/}
                    {/* https://www.npmjs.com/package/react-copy-to-clipboard */}
                    <div className="pr-2 font-medium text-slate-700">
                        psshin.work@gmail.com
                    </div>
                    <a 
                        className={`pl-2 font-medium text-slate-700`} 
                        href="https://www.linkedin.com/in/petershin23/" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        {/* LinkedIn icon by Icons8 */}
                        <img className="w-16 h-16 cursor-pointer" src={linkedin} />
                    </a>
                    <a 
                        className="pl-2 font-medium text-slate-700" 
                        href="https://github.com/PeterShin23" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        {/* Github icon by Icons8 */}
                        <img className="w-16 h-16 cursor-pointer" src={github} />
                    </a>
                </div>
            </motion.div>
            <motion.div className="flex flex-col w-1/2 justify-center items-center"
                initial={{ y: 500 }} // Initial position (bottom)
                animate={{ y: 0 }}   // Final position (up)
                transition={{ duration: 1 }}
            >
                <MemoizedSkillsCloud />
            </motion.div>
        </div>
    )
}
