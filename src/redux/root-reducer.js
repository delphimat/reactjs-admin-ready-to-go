import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import orderReducer from "./order/order.reducer";

export default combineReducers({
    user: userReducer,
    cart: orderReducer
});