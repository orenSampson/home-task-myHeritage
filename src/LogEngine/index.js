import { DEBUG } from "./types";

const API = "https://run.mocky.io/v3/64d0a6ca-0452-4e0f-8afe-127a87d22cbb";

export default class LogEngine {
  constructor() {
    this.logs = [
      {
        id: "oren",
        type: DEBUG,
        message: "I was here from the start!",
        date: "7/7/2027",
      },
    ];
  }

  async fetchLogs() {
    try {
      const response = await fetch(API);

      const newLogs = await response.json();

      this.logs.push(...newLogs);
    } catch (error) {
      console.log(error);
    }

    return this.logs;
  }
}

/*
[{"id":1,"type":"error","message":"This sentence is false","source":"MyApp","date":"19/4/2020"},{"id":2,"type":"error","message":"This sentence is not true","source":"Not MyApp","date":"20/2/2020"},{"id":3,"type":"warning","message":"this plane doesn't have any phalange","date":"20/2/2020"},{"id":4,"type":"secret","message":"This isn't really a secret","date":"19/4/2020"},{"id":5,"type":"secret","message":"Ok ok this one is a secret (and from the future)","date":"7/7/2027"}] 
*/
