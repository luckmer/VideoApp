const CalcDate = (data) => {
  const Data = new Date(data.date.toString());

  const Result = `${Data.getDate()}-${
    Data.getMonth() + 1
  }-${Data.getFullYear()}`;

  return `${Result}`;
};
export default CalcDate;
