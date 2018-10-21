import { createStackNavigator } from "react-navigation";
import { fromLeft } from "react-navigation-transitions";
import Login from "../Screens/LoginScreen";
import Home from "../Screens/Home";
import Menu from "../Screens/Menu";

export const HomeStack = createStackNavigator({
    home: Home,
    menu: Menu
}, {
        headerMode: 'none',
        transitionConfig: () => fromLeft()
    })


export const MainStack = createStackNavigator({
    login: Login,
    homeStack: HomeStack
}, {
        headerMode: 'none'
    })