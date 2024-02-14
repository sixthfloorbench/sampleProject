import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

//Common Css files
import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";
import "../src/index.css"
import "@fontsource/open-sans"; // Defaults to weight 400
import "@fontsource/open-sans/400.css"; // Specify weight
import "@fontsource/open-sans/400-italic.css"; // Specify weight and style

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);

const AppComponent = lazy(() => import("./Container/App/index.js"));

root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <div className="">
        <AppComponent />
      </div>
    </Suspense>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
