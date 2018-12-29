const intialList = [
  {
    "name": "Item One",
    "link": "#",
    "price":"24.99",
    "dec": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "image": "http://placehold.it/700x400",
    "raiting": 4,
    "addToCart": false,
    "btnText": "Add To Cart",
    "quantity": 1
  },
  {
    "name": "Item Two",
    "link": "#",
    "price":"24.99",
    "dec": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "image": "http://placehold.it/700x400",
    "raiting": 4,
    "addToCart": false,
    "btnText": "Add To Cart",
    "quantity": 1
  },
  {
    "name": "Item Three",
    "link": "#",
    "price":"24.99",
    "dec": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "image": "http://placehold.it/700x400",
    "raiting": 4,
    "addToCart": false,
    "btnText": "Add To Cart",
    "quantity": 1
  },
  {
    "name": "Item Four",
    "link": "#",
    "price":"24.99",
    "dec": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    "image": "http://placehold.it/700x400",
    "raiting": 4,
    "addToCart": false,
    "btnText": "Add To Cart",
    "quantity": 1
  }
];

const productsReducer = (state = intialList, action)=>{
  switch (action.type) {
    case "UPDATE_PRODUCTS":
      state = {
        ...state,
        products : action.payload
      }

      break;

    default:

  }
  return state;
}

export default productsReducer;
