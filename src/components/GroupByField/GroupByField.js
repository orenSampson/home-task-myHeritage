import React, { useRef, useState } from "react";
import Logs from "../Logs/Logs";
import { nanoid } from "nanoid";

const groupByFunc = (groupBy, logs) => {
  const logMap = new Map();

  for (const log of logs) {
    console.log(`log[groupBy]`, log[groupBy]);

    if (!logMap.has(log[groupBy])) {
      logMap.set(log[groupBy], [log]);
    } else {
      const groupByArr = logMap.get(log[groupBy]);

      groupByArr.push(log);

      logMap.set(log[groupBy], groupByArr);
    }
  }

  console.log(`logMap`, logMap);

  const outputArr = [];

  for (const [key, value] of logMap.entries()) {
    outputArr.push(<h3 key={nanoid()}>{key}</h3>);
    outputArr.push(<Logs logsArr={value} key={nanoid()}></Logs>);
  }

  return outputArr;
};

const GroupByField = (props) => {
  const [RenderedLogs, setRenderedLogs] = useState(null);
  const selectInputRef = useRef();

  const fieldChangedHandler = () => {
    const groupBy = selectInputRef.current?.value;

    if (groupBy === "none") {
      setRenderedLogs(<Logs logsArr={props.logsArr} />);
    } else {
      setRenderedLogs(groupByFunc(groupBy, props.logsArr));
    }
  };

  return (
    <div>
      <label htmlFor="groupBy">Group By Field: </label>
      <select
        ref={selectInputRef}
        onChange={fieldChangedHandler}
        name="groupBy"
        id="groupBy"
      >
        <option value="none">None</option>
        <option value="type">Type</option>
        <option value="message">Message</option>
        <option value="date">Date</option>
      </select>

      {RenderedLogs}
    </div>
  );
};

export default GroupByField;
