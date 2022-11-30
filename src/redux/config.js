import {createLogger} from "redux-logger/src";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

const logger = createLogger({
 diff: true,
 collapsed: true,
})

const rootReducer = combineReducers({
 //
})

const store = createStore(rootReducer, applyMiddleware(thunk,logger))


export default store;
