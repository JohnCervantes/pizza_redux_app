const initialCountersState = {
  counter: 0
};

const counterReducer = (state = initialCountersState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return { counter: state.counter + 1 };
  }
  return state;
};

export default counterReducer;
