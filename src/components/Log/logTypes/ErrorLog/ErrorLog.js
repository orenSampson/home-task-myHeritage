import React from "react";

const ErrorLog = (props) => {
  const prefix = "[ERROR] ";
  const suffix = "@" + props.log.source;

  const Message = `${prefix}${props.log.message}${suffix}`;

  return <div>{Message}</div>;
};

export default ErrorLog;
