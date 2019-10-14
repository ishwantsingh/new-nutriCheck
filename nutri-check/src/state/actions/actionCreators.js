const getInfo = (fat, fiber, protein, carbohydrate, mineral, calorie) => {
  return {
    type: "GET_INFO",
    payload: {
      fat,
      fiber,
      protein,
      carbohydrate,
      mineral,
      calorie
    }
  };
};
export default getInfo;
