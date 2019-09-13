
import { createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import Login from './Pages/Login'
import Main from './Pages/Main'
import Map from './Pages/Map/Map'
import Statistics from './Pages/Statistics/Statistics'
import DiscardPage from './Pages/DiscardPage/index'

export default createAppContainer(
    createSwitchNavigator
    ({
        Login,
        Main,
        Map,
        Statistics,
        DiscardPage
    }),
)
