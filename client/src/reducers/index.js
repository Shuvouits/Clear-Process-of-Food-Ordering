import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { customerReducer } from "./customerReducer";
import { wishlistReducer } from "./wishlistReducer";
import { cartReducer } from "./cartReducer";



const rootReducer = combineReducers({
    user: userReducer,
    customer: customerReducer,
    wishlist: wishlistReducer,
    cart: cartReducer
    
})
export default rootReducer;