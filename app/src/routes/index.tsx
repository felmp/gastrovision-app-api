import { NavigationContainer } from "@react-navigation/native";
 
import { navigationRef } from './RootNavigation';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AppRoutes } from "./app.routes";
import { Home } from "../pages/Home/Home";
import { DrawerNavigation } from "./drawer.routes";

export function Routes() {
    return(
        <NavigationContainer ref={navigationRef}>
            <AppRoutes />
            {/* <DrawerNavigation /> */}
        </NavigationContainer>
    )   
}