import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Login from '../Components/Login';
import List from '../Components/List';
import ResetPassword from '../Components/ResetPassword';
import Menu from '../Components/Menu';

const DrawerStack = createDrawerNavigator(
  {
    List: { screen: List }
  },
  {
    headerMode: 'none',
    contentComponent: Menu,
    drawerWidth: 296,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }
)

const DrawerNavigation = createStackNavigator(
  {
    DrawerStack: { screen: DrawerStack }
  },
  {
    headerMode: 'none'
  }
)

export const RootStack = createStackNavigator(
  {
    Home: {
      screen: Login,
      navigationOptions: { header: null },
    },
    List: {
      screen: DrawerNavigation,
      navigationOptions: {
        title: 'Lista',
        headerStyle: {
          backgroundColor: '#96cb42',
        },
        headerTintColor: '#fff',
      }
    },
    Reset: {
      screen: ResetPassword,
    },
  },
  {
    initialRouteName: 'List',
  },
  {
    headerMode: 'screen'
  }
);
