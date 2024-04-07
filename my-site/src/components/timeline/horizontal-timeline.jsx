import * as React from "react";

import { events } from "./my-events";
import { getDateDiff, getWidth } from "./helpers";
import { TimelineEvent } from "./timeline-event";
import { Colors } from "../../utils/colors";

export const HorizontalTimelineView = () => {
  const timelineRef = React.useRef(null);
  const timelineEventRef = React.useRef(null);

  const [containerWidth, setContainerWidth] = React.useState(window.innerWidth - 15); // -15 to account for scrollbar
  const [timelineWidth, setTimelineWidth] = React.useState(0);
  const [timelineLeftPosition, setTimelineLeftPosition]  = React.useState(0);
  const [selectedEvent, setSelectedEvent] = React.useState(Object.keys(events).length - 1);

  const maxEventTimeDiff = getDateDiff(events[Object.keys(events).length - 1].startDate, events[0].startDate);

  React.useEffect(() => {
    if (timelineRef.current) {
      const w = timelineRef.current.offsetWidth;
      const l = (containerWidth - w) / 2;

      setTimelineWidth(w);
      setTimelineLeftPosition(l);
    }
  }, [containerWidth]);

  React.useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth - 15);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  return (
    <div className="relative" style={{ width: containerWidth }}>
      <div ref={timelineRef} className="flex mt-10 mx-36 h-2 bg-green-800" style={{ backgroundColor: Colors.Wenge }} />
      <div className="absolute" style={{ left: timelineLeftPosition + timelineWidth - 1, marginTop: -20 }}>
        <div className="text-2xl rotate-90" style={{ color: Colors.Wenge }}>&#x25B2;</div>
      </div>
      <div style={{ left: 100 }}>
        {Object.values(events).map((ev, i) => {
          const additionalLeftPositioning = getWidth(timelineWidth, maxEventTimeDiff, getDateDiff(ev.startDate, events[0].startDate));
          
          return (
            <div 
              ref={timelineEventRef}
              key={`timeline-event-${i}`} 
              className="absolute -mt-4 -ml-3" 
              style={{ left: timelineLeftPosition + additionalLeftPositioning + (i === 0 ? 10 : -30) }}
            >
              <div className="w-6 h-6 rounded-full hover:scale-150" style={{ backgroundColor: Colors.Wenge }} onClick={() => setSelectedEvent(i)} />
            </div>
          )
        })}
      </div>
      <div className="flex p-10 justify-center">
        <TimelineEvent timelineEventRef={timelineEventRef} selectedEvent={events[selectedEvent]} />
      </div>
    </div>
  )
}