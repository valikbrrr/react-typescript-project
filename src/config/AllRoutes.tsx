import HomePage from "../HomePageComponents/HomePage";
import RegForm from "../OtherPage/Entrance/Registrations/RegForm";
import Entrance from "../OtherPage/Entrance/Entrance";
import OnTvPage from "../OtherPage/OnTv/OnTvPage";
import SubscrPage from "../OtherPage/Subscr/SubscrPage";

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
  {
    path: "/regForm",
    element: <RegForm />,
  },
];
