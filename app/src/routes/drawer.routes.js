import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../pages/Home";

const Drawer = createDrawerNavigator()

export function DrawerNavigation () {

    return(
    <Drawer.Navigator>
        <Drawer.Screen name="homedrawer" component={Home}></Drawer.Screen>
    </Drawer.Navigator>
)
}