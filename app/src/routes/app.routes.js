import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Estoques } from "../pages/Estoques/Estoques";


import { Home } from "../pages/Home/Home";
import Login from "../pages/Login";
import { Products } from "../pages/Products/Products";
import Register from "../pages/Register/Register";
import { RegisterClient } from "../pages/RegisterClient/RegisterClient";
import { RequestProduct } from "../pages/RequestProduct/RequestProduct";
import User from "../pages/User/User";

const Drawer = createDrawerNavigator();

const { Navigator, Screen } = createNativeStackNavigator();
export function AppRoutes() {
   const {userInfo} = useContext(AuthContext);

    return (
        <>

            <Navigator screenOptions={{headerShown: false}}>
                {userInfo.access_token ? (
                    <>
                        <Screen name='home' component={Home}/>
                        <Screen name='registercliente' component={RegisterClient}/>
                        <Screen name='products' component={Products}/>
                        <Screen name='requestproduct' component={RequestProduct}/>
                        <Screen name='estoques' component={Estoques}/>
                        <Screen name='user' component={User}/>
                    </>

                ) : (
                    <>
                        <Screen name='login' component={Login}/>
                        <Screen name='register' component={Register}/>
                    </>
                )}
        
            </Navigator>

        </>
                
    )
}