import { combineReducers } from "redux";

import cart from "./slices/cartSlice";
import users from "./slices/admin/usersSlice";
import user from "./slices/userSlice"

const reducers = combineReducers({
  users,
  user,
  cart,
});

export default reducers;
