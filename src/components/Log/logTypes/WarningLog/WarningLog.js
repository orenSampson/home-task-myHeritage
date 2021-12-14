import React from "react";

const WarningLog = (props) => {
  const prefix = "[WARNING!!] ";

  const Message = `${prefix}${props.log.message}`;

  return <div>{Message}</div>;
};

export default WarningLog;
