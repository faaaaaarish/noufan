import React from "react";
import { Route, Routes as Switch, Navigate } from "react-router-dom";

import Homepage from "./Pages/homepage/Homepage";

const Routes = () => {
  const routes = [
    {
      path: "/",
      render: Homepage,
    },
    {
      path: null,
    },
  ];

  return (
    <Switch>
      {routes.map((route) => (route.path ? (
        <Route
          key={route.path}
          path={route.path}
          element={(<route.render />)}
        />
      ) : (
        <Route path="*" element={<Navigate to="/" />} />
      )))}
    </Switch>
  );
};

export default Routes;
