export const increment = payload => {
  return {
    type: "Increment",
    payload: payload
  };
};

export const decrement = () => {
  return {
    type: "Decrement"
  };
};

export const onTextChange = payload => {
  return {
    type: "onTextChange",
    id: payload.id,
    event: payload.event
  };
};

export const onTextonSelectedDropdown = payload => {
  return {
    type: "onSelectedDropdown",
    id: payload.id,
    event: payload.event
  };
};

export const onAddAll = () => {
  return {
    type: "onAddAll"
  };
};
