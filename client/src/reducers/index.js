import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { customerReducer } from "./customerReducer";
import { wishlistReducer } from "./wishlistReducer";



const rootReducer = combineReducers({
    user: userReducer,
    customer: customerReducer,
    wishlist: wishlistReducer
    
})
export default rootReducer;