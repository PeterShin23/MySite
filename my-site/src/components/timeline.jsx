import * as React from 'react';
import { minContainerWidth } from '../constants/constants';

import { Colors } from '../utils/colors';

export const TimelineContainer = (props) => {
  const { containerHeight } = props;

	return (
        <div 
          className="container flex flex-row max-w-full" 
          style={{
            backgroundColor: Colors.Cream, 
            minWidth: minContainerWidth,
            minHeight: containerHeight
          }}
        >
            
        </div>
    )
}
