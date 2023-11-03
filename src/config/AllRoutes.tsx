import HomePage from "../HomePageComponents/HomePage";
import Entrance from "../OtherPage/Entrance";
import OnTvPage from "../OtherPage/OnTvPage";
import SubscrPage from "../OtherPage/SubscrPage";
import MainPage from "../OtherPage/MainPage";

export const allRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/mainpage",
    element: <MainPage />,
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
