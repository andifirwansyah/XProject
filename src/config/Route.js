import { createStackNavigator } from "react-navigation";
import Login from "../Screens/LoginScreen";
import Home from "../Screens/Home";

export const HomeStack = createStackNavigator({
    home: Home
}, {
        headerMode: 'none'
    })


export const MainStack = createStackNavigator({
    login: Login,
    homeStack: HomeStack
}, {
        headerMode: 'none'
    })