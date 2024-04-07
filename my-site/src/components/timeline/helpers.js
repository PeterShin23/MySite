import { monthMapper } from "../../utils/months";

export const getDateDiff = (date1, date2) => {
  const newDate1 = new Date(date1)
  const newDate2 = new Date(date2);

  newDate1.setMonth(newDate1.getMonth() + 1, 0,0,0,0,0);
  newDate2.setMonth(newDate2.getMonth() + 1, 0,0,0,0,0);

  return (newDate1.getTime() - newDate2.getTime()) / 86400000; // divided by ms in a day
}

export const getWidth = (maxWidth, maxTime, timeDiff) => {
  return (maxWidth * timeDiff) / maxTime;
}

export const getExperienceTimeDisplay = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = date2 ? new Date(date2) : null;

  const month1 = d1.getMonth() + 1;
  const year1 = d1.getFullYear();
  const d1Text = `${monthMapper(month1)} ${year1}`

  const month2 = d2 ? d2.getMonth() + 1 : null;
  const year2 = d2?.getFullYear();
  const d2Text = d2 ? `${monthMapper(month2)} ${year2}` : "Current"

  return `${d1Text} - ${d2Text}`
}