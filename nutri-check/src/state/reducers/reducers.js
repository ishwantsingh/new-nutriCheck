const initialState = {
  fat: "low",
  fiber: "low",
  protein: "low",
  carbohydrate: "low",
  mineral: "low",
  calorie: "low"
};

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_INFO":
      return {
        ...state,
        fat: action.payload.fat,
        fiber: action.payload.fiber,
        protein: action.payload.protein,
        carbohydrate: action.payload.carbohydrate,
        mineral: action.payload.mineral,
        calorie: action.payload.calorie
      };
    default:
      return state;
  }
}
