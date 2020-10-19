import { createStore, compose, Store, applyMiddleware } from "redux";
import { IAppState } from "../interfaces/reducers.types";
import rootReducer from "./reducers/Root.reducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

const configureStore = (initialState: IAppState): Store<IAppState, any> => {
  const composeEnhancers =
    (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; //add support for Redux dev tools

  const middlewares = [reduxImmutableStateInvariant()];

  return createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(...middlewares))
  );
};

export default configureStore;
