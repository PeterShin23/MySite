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
  const { eventStartingPosition, selectedEvent, isExpandedCard, toggleIsExpandedCard } = props;

  const [currentEventPosition, setCurrentEventPosition] = React.useState({ x: 0, y: 0 });
  const [eventWidth, setEventWidth] = React.useState(516) // biggest div, I don't like this

  const timelineEventRef = React.useRef(null);

  React.useEffect(() => {
    if (timelineEventRef.current) {
      const { x, y, width } = timelineEventRef.current.getBoundingClientRect();

      const moveX = eventStartingPosition.x - x;
      const moveY = eventStartingPosition.y - y;
      const w = width;

      setCurrentEventPosition({ x: moveX, y: moveY })
      setEventWidth(w);
    }
  }, [])

  return (
    <motion.div
      ref={timelineEventRef}
      className="border-2 mt-10 p-2 rounded-lg shadow-lg cursor-pointer"
      style={{ 
        minWidth: 516,
        borderColor: Colors.TeaGreenDark,
        "--tw-shadow-color": Colors.TeaGreenDark,
        "--tw-shadow": "var(--tw-shadow-colored)"
      }}
      initial={{ width: eventWidth }} 
      animate={{ width: isExpandedCard ? 1100 : eventWidth }} 
      transition={{ duration: 0.5 }} 
    >
      <div onClick={toggleIsExpandedCard}>
        <TimelineEventInfo selectedEvent={selectedEvent} isExpandedCard={isExpandedCard} />
      </div>
    </motion.div>
  )
}

const TimelineEventInfo = (props) => {
  const { isExpandedCard, selectedEvent: ev } = props;

  const formattedDescription = descriptionWrapper(ev.description.split(";"))

  return (
    <div className="flex flex-row" style={{ color: Colors.Wenge, bakgroundColor: Colors.Wenge }}>
      <img className="flex p-4 justify-center items-center w-48 h-48" src={ev.image}/>
      <div className="flex flex-col pr-4 h-40" style={{ minWidth: "18rem" }}>
        <div className="flex text-2xl font-bold pt-8">{ev.title}</div>
        <div className="flex text-lg font-bold max-w-72">{ev.subtitle}</div>
        <div className="flex mt-auto">{getExperienceTimeDisplay(ev.startDate, ev.endDate)}</div>
      </div>
      {isExpandedCard && (
        <div className="h-48 relative">
          <div className="absolute border-l-4 h-28 rounded-lg mr-4 mt-10" style={{ borderColor: Colors.TeaGreenDark }} />
          <div className="flex pl-8 pr-4 h-48">
            {/* {getDescription()} */}
            <motion.div 
              className="flex justify-center flex-col" 
              style={{ maxWidth: "32rem" }} 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: isExpandedCard ? 0.35 : 0 }}
              dangerouslySetInnerHTML={{ __html: formattedDescription }}/>
          </div>
        </div>
      )}
    </div>
  )
}

const descriptionWrapper = (textArray) => {
  const textInP = textArray.map(text => {
    if (!text) return `<br />`

    return `<p>${text}</p>`
  })

  return textInP.join("")
}