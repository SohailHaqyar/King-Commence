import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import { persistReducer } from "redux-persist";
import shopReducer from './shop/shop.reducer'
import storage from "redux-persist/lib/storage";

const persist = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop:shopReducer
});

export default persistReducer(persist, rootReducer);
