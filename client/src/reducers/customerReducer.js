import Cookies from "js-cookie";

export function customerReducer(
  state = Cookies.get("customer") ? JSON.parse(Cookies.get("customer")) : null,

  action
) {
  switch (action.type) {
    case "CLOGIN":
      return action.payload;
      
    case "CUPDATE":
      return action.payload;

    case "CLOGOUT":
      return null;
    case "VERIFY":
      return { ...state, verified: action.payload };

    default:
      return state;
  }
}