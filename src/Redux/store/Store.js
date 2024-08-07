import { applyMiddleware, createStore } from "redux";
import { moviesReduser } from "../reducer/moviesReducer";
import { thunk } from "redux-thunk";




// 1- create store
export const Store = createStore(moviesReduser , applyMiddleware(thunk))
