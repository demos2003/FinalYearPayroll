import React, { useState, useEffect } from "react";

function getDay() {
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[today.getDay()];
    const month = today.toLocaleString('default', { month: 'long' });
    const dayOfMonth = today.getDate();
    const year = today.getFullYear();
    setDay(`${dayOfWeek}`);
    setDate(`${month} ${dayOfMonth}, ${year}`);
  }, []);

  return (
    <div>
      <h1>Today is {day}</h1>
      <h2>{date}</h2>
    </div>
  );
}

export default getDay;



