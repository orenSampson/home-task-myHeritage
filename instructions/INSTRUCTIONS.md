# Log viewer application task

Hello candidate and welcome to the Log Viewer appliction task!
It was created to test your UI building, architecture, debugging and clean code skills,
try to build it with thought and quality and even have a bit of fun (:

## Goal:

Create a log viewer application that can display details based on different types of logs.

You have 60 minutes, so manage your time wisely.

You can use any external module, framework, stack-overflow answers, etc.
You have an environment that is welcoming and accepts ES6.

There is a some boilerplate code for starting with react, if you decide not to use react, you can delete it.

## Overall:

- The task has iterative steps, though you can skip a step if needed.
- It is challenging to complete all the steps, prefer quality over quantity.
- Try to leave the code better than when you found it.

Existing code:

- `LogEngine` is a class responsible for saving/fetching/retrieving log data

Use and **modify** the LogEngine existing code in order to achieve the needed tasks.

## Tasks:

### 1. Fetching logs:

Fetch existing logs using the API mentioned in the resources section using LogEngine.fetchLogs

**Hint**: Does LogEngine.fetchLogs work??
Design: https://i.ibb.co/mbt5y4s/Fetching-logs.png

### 2. Initial log list page

Create a page that shows the list of logs that were fetched the previous task.
At this step, the logs should show the `message` property of each log, without anything special.

Design: https://i.ibb.co/TPY5XJb/Listing-logs-plain.png

### 3. Various log types

Our app needs to support multiple levels of application logs, each log type has different attributes.
Display the different fetched logs based on their type, based on the template given in the design.

- **Debug** - Simplest log, does not contain additional information.
  `{message: "Message content"}`
  should render
  `debug / Message content`

- **Warning** - Higher level simple log, does not contain additional information. {message}
  `{message: "Message content"}`
  should render
  `[WARNING!!] Message content`

- **Error** - Error level log that implies an error has occurred, contains a source property in addition to simple log data.
  `{message: "Message content", source: "Source"}`
  should render
  `[ERROR] MessageContent@Source`

- **Secret** - Simple log that should remain a secret
  `{message: "Something secret"}`
  should render
  `SECRET!!! shhh` (constant string)

Design: https://i.ibb.co/qBW5Q1J/Showing-logs-by-type.png

#### Notes

- In the future more logs with different attributes might be added, think how can we address this.

### 4. Pick one of the following tasks, no need to do both:

#### 4.1 Group logs by field

We need to add the ability to group the logs by a given field.
**For this task, do not use any library for the grouping logic.**

The application should include a dropdown menu that groups the logs by the next fields:

- None - Should show all logs (without grouping)
- type
- message
- date

Design: https://i.ibb.co/Sf74z81/Group-by-field-logs.png

#### 4.2 Responsive layout and styling

We need to make our application look good and responsive.

Each log should now be displayed as a card in a row,
where each type of log should be displayed in a different color.

- debug:
  background: white
  text: black
- warning:  
  background: #ff9f7b
  text: black
- error:
  background: lightpink
  text: black
- secret:
  background: black
  text: white
  hover: The item (alone) should be invisible when hovering over it

The layout should also be responsive,
meaning that the number of cards displayed in each row should be adjusted by the width of the window.

Design: https://i.ibb.co/hgBSZmH/Responsive-styling.png

##### Note

If you decided to do 4.2 AND 4.1, apply the styling ONLY when 'None' is selected in the dropdown (from task #4.2).
