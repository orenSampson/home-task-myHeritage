import React from "react";

const DebugLog = (props) => {
  const prefix = "debug / ";

  const Message = `${prefix} ${props.log.message}`;

  return <div>{Message}</div>;
};

export default DebugLog;
