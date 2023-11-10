import HomePage from "../HomePageComponents/HomePage";
import Entrance from "../OtherPage/Entrance";
import OnTvPage from "../OtherPage/OnTvPage";
import SubscrPage from "../OtherPage/SubscrPage";

export const allRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/ontvpage",
    element: <OnTvPage />,
  },
  {
    path: "/entrance",
    element: <Entrance />,
  },
  {
    path: "/subscrpage",
    element: <SubscrPage />,
  },
];
