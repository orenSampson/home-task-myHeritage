import * as LOGS_ADDONS from "../../constants/logsAddons";
import * as LOGS_TYPES from "../../constants/logsTypes";

export const logOutPutFunc = (log) => {
  const type = log.type;

  switch (type) {
    case LOGS_TYPES.ERROR:
      return `${LOGS_ADDONS.ERROR_OUTPUT.prefix} | ${log.message} | ${
        log.source ? log.source : ""
      }`;

    case LOGS_TYPES.DEBUG:
      return `${LOGS_ADDONS.DEBUG_OUTPUT.prefix} | ${log.message}`;

    case LOGS_TYPES.WARNING:
      return `${LOGS_ADDONS.WARNING_OUTPUT.prefix} | ${log.message}`;

    case LOGS_TYPES.SECRET:
      return `some secret message`;

    default:
      return;
  }
};
