import {DrawerRoutes, ROUTES} from './route';

export type RootStackParamList = {
  [ROUTES.Login]?: undefined;
  [ROUTES.Register]?: undefined;
  [ROUTES.Home]?: undefined;
};

export type DrawerStackParamList = {
  [DrawerRoutes.DrawerHome]?: undefined;
};
