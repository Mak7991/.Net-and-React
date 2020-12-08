import React from "react";

//components
import AppRouter from "components/AppRouter";
import { store } from "redux/store";
// import {persistor} from "redux/store"

// library
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";

//styles
import "styles/App.scss";

function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
