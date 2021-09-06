import { applyMiddleware, createStore,compose } from "redux";
import { combineReducers } from "redux";
import { homeReducer } from "../Components/Home/Redux compoents/HomePanelSlice";
import thunk from "redux-thunk"

const composedEnhancer = compose(applyMiddleware(thunk),applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default function configureStore(preloadedState){
    const store = createStore(homeReducer,undefined,composedEnhancer);
  return store
}
