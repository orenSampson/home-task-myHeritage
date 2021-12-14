import React, { useRef } from "react";

const messagesOptionsFunc = (logsArr) => {
  const messagesSet = new Set();

  for (const log of logsArr) {
    messagesSet.add(log.message);
  }

  const messagesArr = Array.from(messagesSet);

  const messagesOptions = messagesArr?.map((message) => {
    return (
      <option key={message} value={message}>
        {message}
      </option>
    );
  });

  return messagesOptions;
};

const AdvancedLogs = (props) => {
  const messagesInputRef = useRef();

  const messagesOptions = messagesOptionsFunc(props.logsArr);

  const messageChangedHandler = () => {
    const selectedMessage = messagesInputRef.current?.value;
    const { logsArr, setfilteredLogsArr } = props;

    console.log(`selectedMessage`, selectedMessage);

    const filteredLogs = logsArr.filter(
      (log) => log.message === selectedMessage
    );

    setfilteredLogsArr(filteredLogs);
  };

  return (
    <div>
      <div>
        <label htmlFor="name">Message: </label>
        <select
          id="name"
          required
          ref={messagesInputRef}
          onChange={messageChangedHandler}
        >
          {messagesOptions}
        </select>
      </div>
    </div>
  );
};

export default AdvancedLogs;
