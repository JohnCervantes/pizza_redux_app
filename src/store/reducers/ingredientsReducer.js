const initialIngredientsState = {
  toppings: {},
  sauceAndCrust: {}
};

const ingredientsReducer = (state = initialIngredientsState, action) => {
  switch (action.type) {
    case "ADD_TOPPINGS":
      return { ...state, toppings: action.payload.toppings };
    case "ADD_SAUCE_AND_CRUST":
      return { ...state, sauceLevel: action.payload.sauceAndCrust };
  }
  return state;
};

export default ingredientsReducer;

// sauceLevel: "",
// crustType: "",
// pepperoni: "",
// pineapple: "",
// spinach: "",
// sausage: "",
// bacon: "",
// onion: "",
// mushroom: ""
