import React from "react";

const DateConvert = ({ date }) => {
  const thedate = new Date(date);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formatDate = new Intl.DateTimeFormat("es-ES", options).format(thedate);
  return <div className="purchase--date">{formatDate}</div>;
};

export default DateConvert;
