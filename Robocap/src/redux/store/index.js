import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";

import { persistStore } from "redux-persist";

import rootReducer from "redux/reducers";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,(applyMiddleware(ReduxThunk)));

const persistor = persistStore(store);

export { store, persistor };

// import { createStore } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// import rootReducer from "redux/reducers";

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }
