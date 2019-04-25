import { createStackNavigator } from 'react-navigation';

import Login from './pages/Login'
import Feed from './pages/Feed'
import Tweet from './pages/Tweet'
import NewTweet from './pages/NewTweet'
import Profile from './pages/Profile'
import Trending from './pages/Trending'

const Routes = creeateStackNavigator({
    Login,
    Feed,
    Tweet,
    NewTweet,
    Profile,
    Trending,
});

export default Routes;