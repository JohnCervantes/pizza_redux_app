const initialUserState = {
  user: {}
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { user: action.payload.user };
  }
  return state;
};

export default userReducer;
