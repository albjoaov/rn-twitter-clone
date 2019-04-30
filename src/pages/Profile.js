import React, { Component } from 'react';

import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ProfileHeader from '../components/ProfileHeader'
import Tweet from '../components/Tweet'
import Entypo from 'react-native-vector-icons/Entypo';


export default class Profile extends Component {

  static navigationOptions = () => ({
    title: "Profile",
    headerTintColor: '#4BB0EE',

    headerRight: (
      <TouchableOpacity>
        <Entypo
        name="dots-three-vertical"
        style = {{ marginRight: 20 }}
        size={24}
        color="#4BB0EE"
        />
      </TouchableOpacity>
    ),
  });

  render() {
    return (
    
    <ScrollView style={styles.container}>
      <View>
        <ProfileHeader/>
      </View>
      <Tweet/>
      <Tweet/>
      <Tweet/>
      <Tweet/>
      <Tweet/>
    </ScrollView>
    
    )
  }
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }

});