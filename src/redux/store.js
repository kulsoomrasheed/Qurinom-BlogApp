import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import {thunk} from "redux-thunk"
import { reducer as authReducer} from "./authReducer/reducer"
import {reducer as blogsReducer} from "./blogsReducer/reducer"
const rootReducer= combineReducers({authReducer, blogsReducer})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))