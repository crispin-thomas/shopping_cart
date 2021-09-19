const cart = [];

export default function cartReducer(state = cart, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      //Add the elements to the cart.
      return [...state, action.payload];
    case "REMOVE_CART":
      //The remove cart reducer first find the index of the cart item.
      const index = state.findIndex(
        (cartItem) => cartItem.id === action.payload
      );

      let newCart = [...state]; //Then copy the cart in a new array.

      //if the index is found then remove using the splice function.
      if (index >= 0) {
        newCart.splice(index, 1);
      }

      return [...newCart]; //After that return the new Cart items.
    default:
      return state;
  }
}
