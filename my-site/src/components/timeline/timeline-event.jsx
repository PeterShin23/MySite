import * as React from "react";
import { motion } from "framer-motion";
import { Colors } from "../../utils/colors";
import { getExperienceTimeDisplay } from "./helpers";

/**
 * Represents a single timeline event
 * 
 * @returns a Timeline event
 */
export const TimelineEvent = (props) => {
  const { eventStartingPosition, selectedEvent } = props;

  const [currentEventPosition, setCurrentEventPosition] = React.useState({ x: 0, y: 0 });

  const timelineEventRef = React.useRef(null);

  React.useEffect(() => {
    if (timelineEventRef.current) {
      const { x, y } = timelineEventRef.current.getBoundingClientRect();

      const moveX = eventStartingPosition.x - x;
      const moveY = eventStartingPosition.y - y;

      setCurrentEventPosition({ x: moveX, y: moveY })
    }
  }, [])

  return (
    <motion.div
      ref={timelineEventRef}
      className="border-2 mt-10 p-2 rounded-lg shadow-lg"
      style={{ 
        borderColor: Colors.TeaGreenDark,
        "--tw-shadow-color": Colors.TeaGreenDark,
        "--tw-shadow": "var(--tw-shadow-colored)"
      }}
    >
      <div className="flex flex-row">
        <img className="flex p-4 items-center justify-center w-48 h-48" src={selectedEvent.image}/>
        <div className="flex flex-col p-4 justify-center">
          <p>{selectedEvent.title}</p>
          <div>{`| ${selectedEvent.subtitle}`}</div>
            <p>{getExperienceTimeDisplay(selectedEvent.startDate, selectedEvent.endDate)}</p>
        </div>
      </div>
    </motion.div>
  )
}