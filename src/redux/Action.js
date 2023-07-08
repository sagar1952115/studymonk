export const setValue = (payload) => {
  console.log("action colled");
  return {
    type: "SETVALUE",
    data: payload,
  };
};
