import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

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

const App = () => {
  return (
    <>
      <Router>
        <RoutePage />
      </Router>
    </>
  );
};

export default App;
