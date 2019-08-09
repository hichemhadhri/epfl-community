import { createDrawerNavigator, createAppContainer, navigationOptions } from 'react-navigation'
import Forum from '../components/forum'
import Profile from '../components/Profile'



const DrawerNavigation = createDrawerNavigator(
  {
   Profile : Profile,
    AssisEPFL: Forum

  },
  {
    hideStatusBar: false,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
);


export default DrawerNavigation;
