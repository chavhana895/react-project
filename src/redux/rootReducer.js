import { combineReducers } from "redux";
import reducer from "./Form/form-reducers";
import todoReducers from "../todo/redux/reducers/todoReducer";

import shoppingReducer from "./Shopping/shopping-reducer";

const rootReducer = combineReducers({
  shop: shoppingReducer,
   reducer,
   todoReducers
});

export default rootReducer;
