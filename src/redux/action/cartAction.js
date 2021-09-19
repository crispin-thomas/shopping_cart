export const addToCart = (item) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
  };
};

export const removeFromCart = (item) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_CART",
      payload: item,
    });
  };
};
