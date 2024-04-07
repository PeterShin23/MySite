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