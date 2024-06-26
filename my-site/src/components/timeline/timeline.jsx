import * as React from 'react';

import { minContainerWidth } from '../../constants/constants';
import { HorizontalTimelineView } from './horizontal-timeline';
import { Colors } from '../../utils/colors';

export const TimelineContainer = (props) => {
  const { id, containerHeight } = props;

	return (
    <div 
      id={id}
      className="flex max-w-full" 
      style={{
        backgroundColor: Colors.Parchment, 
        minWidth: minContainerWidth,
        minHeight: containerHeight
      }}
    >
      <div className="flex flex-col">
        <div className="flex flex-row px-20 py-10">
          <div className="text-7xl font-bold font-sans" style={{ color: Colors.Wenge }}>Experiences</div>
          <div className="flex items-center ml-auto"></div>
        </div>
        <HorizontalTimelineView />
      </div>
    </div>
  )
}
