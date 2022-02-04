import React from "react";
import { Route, Switch } from "react-router-dom";

import Event from "./components/Event";

const Routes: React.FC = () => (
  <div>
    <Switch>
      <Route
        path="/"
        render={() => (
          <Event />
        )}
      />
    </Switch>
  </div>
);

export default Routes;
