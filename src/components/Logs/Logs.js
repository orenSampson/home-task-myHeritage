import React from "react";
import { nanoid } from "nanoid";

import Log from "../Log/Log";

const Logs = (props) => {
  const RenderLogs = props.logsArr?.map((log) => (
    <Log log={log} key={nanoid()} />
  ));

  return <div>{RenderLogs}</div>;
};

export default Logs;
