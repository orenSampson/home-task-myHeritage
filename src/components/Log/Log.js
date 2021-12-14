import React from "react";

import * as TYPES from "../../LogEngine/types";
import ErrorLog from "./logTypes/ErrorLog/ErrorLog";
import DebugLog from "./logTypes/DebugLog/DebugLog";
import WarningLog from "./logTypes/WarningLog/WarningLog";
import SecretLog from "./logTypes/SecretLog/SecretLog";

const Log = (props) => {
  const type = props.log.type;

  switch (type) {
    case TYPES.ERROR:
      return <ErrorLog log={props.log} />;

    case TYPES.DEBUG:
      return <DebugLog log={props.log} />;

    case TYPES.WARNING:
      return <WarningLog log={props.log} />;

    case TYPES.SECRET:
      return <SecretLog log={props.log} />;

    default:
      return <div></div>;
  }
};

export default Log;
