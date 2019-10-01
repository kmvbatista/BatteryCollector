
import { createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import Login from './Pages/Login'
import Main from './Pages/MainPage/index'
import Map from './Pages/Map/Map'
import Statistics from './Pages/Statistics/Statistics'
import DiscardPage from './Pages/DiscardPage/index'
import SignUp from './Pages/SignUpPage/index'
import UpdateUserData from './Pages/UpdateUserData/index'
import Indicate from './Pages/Indicate/index'
import Ranking from './Pages/Ranking/index'

export default createAppContainer(
    createSwitchNavigator
    ({
        Login,
        Main,
        Map,
        DiscardPage,
        Statistics,
        SignUp,
        UpdateUserData,
        Indicate,
        Ranking
    }),
)
