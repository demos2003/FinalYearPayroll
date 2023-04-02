import React from "react";
import "react-datetime/css/react-datetime.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import config from "../config";
import moment from "moment";

function LatenessUpdateForm(props){
  const [startDate, setStartDate] = useState(new Date(props.lateness.start));
  const [startTime, setStartTime] = useState(
    new Date(props.lateness.start).toLocaleTimeString([], {
      hour:"2-digit",
      minute:"2-digit",
    })
  )

  const [endDate, setEndDate] = useState(new Date(props.lateness.end));
  const [endTime, setEndTime] = useState(
    new Date(props.lateness.end).toLocaleDateString([], {
      hour:"2-digit",
      minute:"2-digit",
    })
  )

  const [deductionAmount, setDeductionAmount] = useState(
    props.lateness.deductionAmount
  );
}

const handleSubmit = async (e) => {
  e.preventDefault();
  const start = new Date(
    startDate.toDateString() + "" + startTime
  ).toISOString();

  const end = new Date(endDate.toDateString() + " " + endTime).toISOString();
  const response = await fetch(`${config.baseURL}/lateness/${props.lateness._id}`, {
    method: "PUT",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify({ start, end, deductionAmount}),
  });
  const updatedLateness = await response.json();
  props.onLatenessUpdated(updatedLateness);
}

