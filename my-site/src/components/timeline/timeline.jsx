import * as React from 'react';

import { minContainerWidth } from '../../constants/constants';
import { HorizontalTimelineView } from './horizontal-timeline';
import { Colors } from '../../utils/colors';

export const TimelineContainer = (props) => {
  const { containerHeight } = props;

	return (
        <div 
          className="flex max-w-full" 
          style={{
            backgroundColor: Colors.Cream, 
            minWidth: minContainerWidth,
            minHeight: containerHeight
          }}
        >
          <div className="flex flex-col">
            <div className="flex flex-row px-20 py-10">
              <div className="text-7xl font-bold font-sans text-slate-500">Experiences</div>
              <div className="flex items-center ml-auto">Use Arrow keys to navigate</div>
            </div>
            <HorizontalTimelineView />
          </div>
        </div>
    )
}
