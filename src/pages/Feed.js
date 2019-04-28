import React, { Component } from 'react';

import { View, ScrollView , StyleSheet, TouchableOpacity, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from 'react-native-vector-icons/FontAwesome';


import Tweet from '../components/Tweet'

export default class Feed extends Component {

  static navigationOptions = {
    title: "Feed",

    headerTintColor: '#4BB0EE',


    headerTitleStyle: {alignSelf: 'center', textAlign: 'center', width: '80%'},

    headerRight: (
      <TouchableOpacity onPress={() => {}}>
        <Logo
        name="pencil-square-o"
        style = {{ marginRight: 20 }}
        size={24}
        color="#4BB0EE"
        />
      </TouchableOpacity>
    ),

    headerLeft: (
      <TouchableOpacity onPress={() => {}}>
        <Icon
        name="person-outline"
        style = {{ marginLeft: 20 }}
        size={24}
        color="#4BB0EE"
        />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <ScrollView style={styles.container}>
          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});