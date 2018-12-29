export function addToCart(product){
  return{
    type: "ADD_PRODUCT",
    payload: product
  }
}
