import React, { Component } from 'react';

import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export default class ProfileHeader extends Component {

  render() {
    return (
    <View>

      <View>
        <Image style={styles.image} source={require('../assets/capa-zeca.jpg')}/>
      </View>
      
      <View style={styles.container}>
        <View style={styles.headerButtonsContainer}>
          <Icon name="circle" size={72}></Icon>
          <View style={styles.headerButtons}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButtonHeader} >Edit profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.name}>Name of the user</Text>
        <Text style={styles.user}>@username</Text>
        <Text style={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
        <View style={styles.infoContainer} >
          <EvilIcons name="location" size={24} color="#4BB0EE"/>
          <Text style={styles.info}>Recife, PE</Text>
        </View>
        <View style={styles.infoContainer}>
          <EvilIcons name="link" size={24} color="#4BB0EE"/>
          <Text style={styles.info}>wwww.github.com/albjoaov</Text>
        </View>
        <View style={styles.infoContainer}>
          <MaterialCommunityIcons name="balloon" size={24} color="#4BB0EE"/>
          <Text style={styles.info}>Born May 30, 1997</Text>
        </View>
        <View style={styles.infoContainer}>
          <EvilIcons name="calendar" size={24} color="#4BB0EE"/>
          <Text style={styles.info}>Joined July 2015</Text>
        </View>
        <View style={styles.followContainer} >
          <Text style={styles.number}>947</Text>
          <Text style={styles.followContainerText}>Following</Text>
          <Text style={styles.number}>1012</Text>
          <Text style={styles.followContainerText}>Followers</Text>
        </View>
        <View style={styles.followContainer}>
          <TouchableOpacity>
            <Text style={styles.buttonContainerText}>Tweets</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.buttonContainerText}>Tweets & Replies</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.buttonContainerText}> Media </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.buttonContainerText}> Likes </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: "#FFF",
      borderBottomWidth: 1,
      borderColor: "#eee",
      padding: 15,
    },

    image: {
      width: '100%',
      height: 120
    },
   
    textButtonHeader: {
      fontSize: 16,
      color: '#4BB0EE',
      paddingRight: 7,
      paddingLeft: 7,
    },

    name: {
      fontSize: 21,
      color: "#000",
    },

    user: {
      fontSize: 18,
      color: "#999",
    },

    bio: {
      fontSize: 15,
      lineHeight: 20,
      color: "#000",
      marginVertical: 10
    },

    info: {
      fontSize: 16,
      color: "#999",
      paddingBottom: 3,
    },

    headerButtonsContainer: {
      flexDirection: "row",
      alignItems: "center",
      padding: 0
    },

    headerButtons: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
    },

    button: {
      borderWidth: 2,
      borderRadius:100,
      borderColor: "#4BB0EE",
      padding: 5,
    },

    followContainer: {
      flexDirection: "row",
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 7,
    },

    infoContainer: {
      flexDirection: "row",
      justifyContent: 'flex-start',
      alignItems: 'center',
    },

    number: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#000",
      marginRight: 6,
    },

    followContainerText: {
      fontSize: 16,
      color: "#999",
      marginRight: 30,
    },

    buttonContainerText: {
      fontSize: 16,
      color: "#4BB0EE",
      marginRight: 15,
    },



});
