import * as React from "react";

import { events } from "./my-events";
import { getDateDiff, getWidth } from "./helpers";
import { TimelineEvent } from "./timeline-event";
import { Colors } from "../../utils/colors";

export const HorizontalTimelineView = () => {
  const timelineRef = React.useRef(null);
  const timelineEventRefs = React.useRef([]);

  const [containerWidth, setContainerWidth] = React.useState(window.innerWidth - 15); // -15 to account for scrollbar
  const [timelineWidth, setTimelineWidth] = React.useState(0);
  const [timelineLeftPosition, setTimelineLeftPosition]  = React.useState(0);
  const [selectedEvent, setSelectedEvent] = React.useState(Object.keys(events).length - 1);
  const [eventStartingPosition, setEventStartingPosition] = React.useState({ x: 0, y: 0 });
  const [redHover, setRedHover] = React.useState(null);

  const maxEventTimeDiff = getDateDiff(events[Object.keys(events).length - 1].startDate, events[0].startDate);

  React.useEffect(() => {
    timelineEventRefs.current = timelineEventRefs.current.slice(0, Object.keys(events).length);
 }, [events]);

  const onTimelineEventClick = (index) => {
    setSelectedEvent(index);

    const { x, y } = timelineEventRefs.current[index].getBoundingClientRect();

    setEventStartingPosition({ x, y });
  }

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
            <div>
              <div 
                ref={el => timelineEventRefs.current[i] = el}
                key={`timeline-event-${i}`} 
                className="absolute -mt-4 -ml-3" 
                style={{ left: timelineLeftPosition + additionalLeftPositioning + (i === 0 ? 10 : -30) }}
                onClick={() => onTimelineEventClick(i)}
              >
                <div 
                  className={`relative w-6 h-6 rounded-full hover:scale-150 cursor-pointer ${selectedEvent === i || redHover === i ? "scale-150" : ""}`} 
                  style={{ backgroundColor: Colors.Wenge }} />
                <div 
                  className={`absolute w-3 h-3 rounded-full bg-red-300 cursor-pointer ${selectedEvent === i ? "scale-150" : ""}`} 
                  style={{ marginTop: -18, marginLeft: 6 }}
                  onMouseEnter={() => setRedHover(i)}
                  onMouseLeave={() => setRedHover(null)} />
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex p-10 justify-center">
        <TimelineEvent eventStartingPosition={eventStartingPosition} selectedEvent={events[selectedEvent]} />
      </div>
    </div>
  )
}