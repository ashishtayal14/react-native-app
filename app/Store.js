import {createStore, 
    combineReducers} from "redux";

import cartReducer from "./cart/Reducer";

let rootReducer = combineReducers({
cartItems: cartReducer,
//auth: authReducer
});

let store = createStore(rootReducer);

export default store;