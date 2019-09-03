
import { createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import Login from './Pages/Login'
import Main from './Pages/Main'
import Map from './Pages/Map'
import Tabs from './Tabs/index'

export default createAppContainer(
    createSwitchNavigator
    ({
        Login,
        Main,
        Map
    }),
)
