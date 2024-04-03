import Cookies from "js-cookie";

export function wishlistReducer(
  state = Cookies.get("wishlist") ? JSON.parse(Cookies.get("wishlist")) : null,

  action
) {
  switch (action.type) {
    case "WISHLIST":
      return action.payload;
      
    case "VERIFY":
      return { ...state, verified: action.payload };

    default:
      return state;
  }
}