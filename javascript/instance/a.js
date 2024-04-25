import { s_instanceResponse } from "./s_instance.js";

const a = () => {
  console.log("a function start");

  const updateInstance = (n) => (s_instanceResponse.s_in = n);

  return { name: "A", instance: s_instanceResponse, updateInstance };
};

export default a;
