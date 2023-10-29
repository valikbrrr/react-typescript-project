import HomePage from "../components/HomePage";
import TestPage from "../components/TestPage";

export const allRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/testpage",
    element: <TestPage />,
  },
];
