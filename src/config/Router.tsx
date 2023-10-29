import { Route, Routes } from "react-router-dom";
import { allRoutes } from "./AllRoutes";

export const Router = () => {
  return (
    <Routes>
      {allRoutes.map((route, id) => (
        <Route key={id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
