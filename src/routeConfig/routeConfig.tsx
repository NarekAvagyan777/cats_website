import { RouteProps } from "react-router-dom";
import { Cats } from "../pages/Cats/Cats";

export enum AppRoutes {
  HOME = "home",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    element: <Cats />,
    path: RoutePaths.home,
  },
};
