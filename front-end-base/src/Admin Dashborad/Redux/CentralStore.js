import { applyMiddleware, createStore,compose } from "redux";
import { combineReducers } from "redux";
import { homeReducer } from "../Components/Home/Redux compoents/HomePanelSlice";
import { projectManagerReducer } from "../Components/ManageProjects/Redux Components/ProjectManagerSlice";
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'
// export default function configureStore(preloadedState){
//   const composedEnhancer = compose(applyMiddleware(thunk),applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//   const store = createStore(homeReducer,undefined,composedEnhancer);
//   return store
// }

// export default configureStore({
//   reducer: {
//     homePanel: homeReducer,
//     projectManagerPanel: projectManagerReducer,
//   },
// });

export default function configureStore(preloadedState) {
  const middlewares = [thunk]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(combineReducers({homePanel:homeReducer,projectManagerPanel:projectManagerReducer}), preloadedState, composedEnhancers)

  return store
}