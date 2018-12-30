export function updateProducts(products){
  return{
    type: "UPDATE_PRODUCTS",
    payload: products
  }
}

export function onMouseIn(products, index){
  products[index].addToCart = true;
  return{
    type: "PRODUCT_HOVER_IN",
    payload: products
  }
}

export function onMouseOut(products, index){
  products[index].addToCart = false;
  return{
    type: "PRODUCT_HOVER_OUT",
    payload: products
  }
}

export function addToCart(products, index){

  if(products[index].btnText!=="Added"){
      products[index].btnText = "Added";
      products[index].addedInCart = true;
  }else{
    alert("Product is Already Addin in Cart");
  }

  return{
    type: "ADD_TO_CART",
    payload: products
  }
  
}


export function removeFromCart(products, index){
  products[index].addToCart = false;
  return{
    type: "REMOVE_FROM_CART",
    payload: products
  }
}
