export const ADD_TO_CART = "[PRODUCT] ADD_TO_CARD";

export function addToCart(product) {
   return { type: ADD_TO_CART, payload: product };
}
