import { createStackNavigator } from "react-navigation";
import Login from "../Screens/LoginScreen";
import Home from "../Screens/Home";
import Page from "../Screens/Page";

export const HomeStack = createStackNavigator({
    home: Home
}, {
        headerMode: 'none'
    })

export const PageStack = createStackNavigator({
    page: Page   
},{
    headerMode: 'none'
})

export const MainStack = createStackNavigator({
    login: Login,
    homeStack: HomeStack,
    pageStack: PageStack
}, {
        headerMode: 'none'
    })