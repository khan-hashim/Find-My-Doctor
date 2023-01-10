export function addToCart(id, date, time) {
  return { type: "ADD_TO_CART", id, date, time };
}
export function removeFromCart(id) {
  return { type: "REMOVE_FROM_CART", id };
}
export function addQuantity(id) {
  return { type: "ADD_QUANTITY", id };
}
export function subQuantity(id) {
  return { type: "SUB_QUANTITY", id };
}
export function emptyCart() {
  return { type: "EMPTY_CART" };
}
// export function addDoctorsAppointment(id, date, time) {
//   return { type: "ADD_DOC_APP", id, date, time };
// }
