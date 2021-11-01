import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import MatchesPage from "../pages/Matches";

function routes() {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={MatchesPage} path="/matches" exact />
    </BrowserRouter>
  );
}

export { routes };
