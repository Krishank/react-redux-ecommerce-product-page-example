const intialState = {
    products: [
      {
        "name": "Item One",
        "link": "#",
        "price":"24.99",
        "dec": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        "image": "http://placehold.it/700x400",
        "raiting": 4,
        "addToCart": false,
        "addedInCart": false,
        "btnText": "Add To Cart",
        "maxQuantity": 5
      },
      {
        "name": "Item Two",
        "link": "#",
        "price":"24.99",
        "dec": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        "image": "http://placehold.it/700x400",
        "raiting": 4,
        "addToCart": false,
        "addedInCart": false,
        "btnText": "Add To Cart",
        "maxQuantity": 1
      },
      {
        "name": "Item Three",
        "link": "#",
        "price":"24.99",
        "dec": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        "image": "http://placehold.it/700x400",
        "raiting": 4,
        "addToCart": false,
        "addedInCart": false,
        "btnText": "Add To Cart",
        "maxQuantity": 3
      },
      {
        "name": "Item Four",
        "link": "#",
        "price":"24.99",
        "dec": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        "image": "http://placehold.it/700x400",
        "raiting": 4,
        "addToCart": false,
        "addedInCart": true,
        "btnText": "Add To Cart",
        "maxQuantity": 2
      }
    ]
}

const productsReducer = (state = intialState, action)=>{

  switch (action.type) {

    case "UPDATE_PRODUCTS":
      state = {
        ...state,
        products: action.payload
      }
      break;

    case "PRODUCT_HOVER_IN":
      state = {
        ...state,
        products: action.payload
      }
      break;

    case "PRODUCT_HOVER_OUT":
      state = {
        ...state,
        products: action.payload
      }
      break;

    case "ADD_TO_CART":
      state = {
        ...state,
        products: action.payload
      }
      break;

    case "REMOVE_FROM_CART":
      state = {
        ...state,
        products: action.payload
      }
      break;

    default:

  }

  return state;
}

export default productsReducer;
