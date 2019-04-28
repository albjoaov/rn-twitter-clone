import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';

import Login from './pages/Login'
import Feed from './pages/Feed'
import NewTweet from './pages/NewTweet'
import Profile from './pages/Profile'
import Trending from './pages/Trending'

const RootStack = createStackNavigator({
    Login,
    Feed,
    NewTweet,
    Profile,
    Trending,
});

const Routes = createAppContainer(RootStack);

export default Routes;