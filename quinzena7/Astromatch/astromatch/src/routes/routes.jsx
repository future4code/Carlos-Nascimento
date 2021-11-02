import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../context/authContext";

import Home from "../pages/Home";
import MatchesPage from "../pages/Matches";
import Login from "../pages/Login";

function routes() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route component={Login} path="/" exact />
        <Route component={Home} path="/home" exact />
        <Route component={MatchesPage} path="/matches" exact />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export { routes };
