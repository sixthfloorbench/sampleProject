import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

//Redux setup
import produce from 'immer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

//Container Pages
import LoginPage from "../Login";
import Registration from "../Registration";
import NotFound from "../NotFound";

const RoutePage = () => {
  let routes = useRoutes([
    { path: "/", element: <LoginPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "registration", element: <Registration /> },
    { path: "*", element: <NotFound /> },
    // ...
  ]);
  return routes;
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

function reducer(state = { 'user': 'sampleUSer' }, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'SAMPLE': {
        if (action.payload) {
          //action
        }
        break;
      }
      default: {
        return state;
      }
    }
  })
}

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <RoutePage />
        </Router>
      </Provider>
    </>
  );
};

export default App;
