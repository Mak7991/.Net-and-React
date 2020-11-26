import React from "react";

//components
import AppRouter from "components/AppRouter";
import { store } from "redux/store";
// library
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

//styles
import "styles/App.scss";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
