import Cookies from "js-cookie";

export function cartReducer(
  state = Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : null,

  action
) {
  switch (action.type) {
    case "STORE":
      return action.payload;
      
    case "VERIFY":
      return { ...state, verified: action.payload };

    default:
      return state;
  }
}