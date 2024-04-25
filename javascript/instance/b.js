import { s_instanceResponse } from "./s_instance.js";

const b = () => {
  console.log("b function start");

  return { name: "B", instance: s_instanceResponse };
};

export default b;
