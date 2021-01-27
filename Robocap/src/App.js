import React from "react";

//components
import AppRouter from "components/AppRouter";

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "redux/store/index";
// library
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
// import { PersistGate } from 'redux-persist/lib/integration/react'

//styles
import "styles/App.scss";

// function clearConsole() {
//   if(window.console || window.console.firebug) {
//      console.clear();
//   }
// }

function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <HashRouter>
          <AppRouter />
        </HashRouter>
      </Provider>
    </PersistGate>
  );
}

export default App;
