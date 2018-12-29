const cartReducer = (state = {}, action)=>{
  switch (action.type) {
    case "RESET_NAV":
      state = {
        ...state,
        navData : action.payload
      }

      break;

    default:

  }
  return state;
}

export default cartReducer;
