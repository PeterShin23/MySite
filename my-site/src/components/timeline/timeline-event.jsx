import * as React from "react";
import { motion } from "framer-motion";

/**
 * Represents a single timeline event
 * 
 * @returns a Timeline event
 */
export const TimelineEvent = (props) => {
  const { timelineEventRef, selectedEvent } = props;



  return (
    <motion.div
      className="border-2 border-blue-400 p-2 rounded-lg"
    >
      <p>{selectedEvent.startDate}</p>
      <p>{selectedEvent.title}</p>
      <div>{`| ${selectedEvent.subtitle}`}</div>
    </motion.div>
  )
}