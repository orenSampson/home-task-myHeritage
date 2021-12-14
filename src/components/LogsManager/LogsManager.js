import React, { useEffect, useState } from "react";

import LogEngine from "../../LogEngine/";
import GroupByField from "../GroupByField/GroupByField";

const LogsManager = () => {
  const [logsArr, setLogsArr] = useState([]);

  useEffect(() => {
    const retrievelogsFunc = async () => {
      const logEngine = new LogEngine();

      try {
        const newLogsArr = await logEngine.fetchLogs();

        setLogsArr(newLogsArr);
      } catch (error) {
        console.log(`error`, error);
      }
    };

    retrievelogsFunc();
  }, []);

  return (
    <div>
      <GroupByField logsArr={logsArr} />
    </div>
  );
};

export default LogsManager;
