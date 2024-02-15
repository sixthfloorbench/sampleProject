import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

//Redux setup
import { Provider } from "react-redux";
import Store from "../../Utils/Store";

//Container Pages
import LoginPage from "../Login";
import Registration from "../Registration";
import NotFound from "../NotFound";
import Home from "../Home";

//Components
import Header from "../../Components/Header";

const RoutePage = () => {
  let routes = useRoutes([
    { path: "/", element: <LoginPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "registration", element: <Registration /> },
    { path: "home", element: <Home /> },
    { path: "*", element: <NotFound /> }
    // ...
  ]);
  return routes;
};

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <Router>
          <Header />
          <RoutePage />
        </Router>
      </Provider>
    </>
  );
};

export default App;
