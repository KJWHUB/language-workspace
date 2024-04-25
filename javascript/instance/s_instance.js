console.log("s_instance file load start");

export function s_instance() {
  const str = () => "s_instance";
  const getS_in = function () {
    return this.s_in;
  };

  return { str, getS_in, this: this };
}

export function createInstance() {
  this.s_in = 1;
  this.str = () => "createInstance";
  this.getS_in = () => this.s_in;
}

export const s_instanceResponse = s_instance();

console.log("s_instance file load end");
