import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./auth/auth.reducer";
import { dataReducer } from "./data/data.reducer";

const rootReducer = combineReducers({
  adminData: dataReducer,
  auth: AuthReducer,
});

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let enhanser = composer(applyMiddleware(thunk));

export const store = legacy_createStore(rootReducer, enhanser);
