import React, { Component } from 'react';

import {View, ScrollView , StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Tweet from '../components/Tweet'

export default class Feed extends Component {

  static navigationOptions = ({navigation}) => ({
    title: "Feed",
    headerTintColor: '#4BB0EE',
    headerTitleStyle: {alignSelf: 'center', textAlign: 'center'},

    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("Trending")}>
        <MaterialIcon
        name="trending-up"
        style = {{ marginRight: 20 }}
        size={24}
        color="#4BB0EE"
        />
      </TouchableOpacity>
    ),

    headerLeft: (
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Icon
        name="user"
        style = {{ marginLeft: 20 }}
        size={24}
        color="#4BB0EE"
        />
      </TouchableOpacity>
    )
  });

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{flex: 1}}>
        <ScrollView style={styles.container}>
            <Tweet/>
            <Tweet/>
            <Tweet/>
            <Tweet/>
            <Tweet/>
            <Tweet/>
        </ScrollView>
        <View style={styles.fixedView}>
          <TouchableOpacity onPress={() => navigate("NewTweet")} style={styles.floatingButton}>
            <Icon
            name="pencil-square-o"
            size={24}
            color="#FFF"
            />
          </TouchableOpacity>
      </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  fixedView : {
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  floatingButton: {
    borderWidth:1,
    borderColor:'#999',
    alignItems:'center',
    justifyContent:'center',
    // position: 'absolute',                                          
    width:70,
    bottom: 10,                                                    
    right: 10,
    height:70,
    backgroundColor:'#4BB0EE',
    borderRadius:100,
  }
  
});