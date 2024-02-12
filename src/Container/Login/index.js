import React from "react";
import { useSelector } from 'react-redux';

function LoginPage(props) {

  const reduxState = useSelector((state) => state);

  return (
    <div>
      <h1>This is Login Page</h1>
      {JSON.stringify(reduxState)} //sample redux state
      Go to: <a href="/registration">Registration Page</a>
    </div>
  );
}

export default LoginPage;
