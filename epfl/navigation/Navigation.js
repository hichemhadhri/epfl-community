import { createStackNavigator, createAppContainer, navigationOptions } from 'react-navigation'
import Home from '../components/home'
import Sign from '../components/Sign'
import DrawerNavigation from './DrawerNavigation'

const logStackNavigator = createStackNavigator({
  Home: {
    screen: Home,

  navigationOptions :{
    header : null
  }
},
Sign: {
  screen : Sign ,
  navigationOptions:{
    header : null
  }
},

  DrawerNavigation : {
    screen : DrawerNavigation,
    navigationOptions: {
      header : null
    }
  }

});


export default createAppContainer(logStackNavigator);
