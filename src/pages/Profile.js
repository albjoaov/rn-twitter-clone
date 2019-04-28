import React, { Component } from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';
import ProfileHeader from '../components/ProfileHeader'
import Tweet from '../components/Tweet'

export default class Profile extends Component {

  static navigationOptions = () => ({
    title: "Profile",
    headerTintColor: '#4BB0EE',
    headerTitleStyle: {alignSelf: 'center', textAlign: 'center', width: '85%'},
  });

  render() {
    return (
    
    <ScrollView style={styles.container}>
      <View>
        <ProfileHeader/>
      </View>
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