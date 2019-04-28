import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ProfileHeader extends Component {
  render() {
    return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Icon name="circle" size={72}></Icon>
        <TouchableOpacity>
          <MaterialIcon name="mail" size={72}></MaterialIcon>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcon name="notifications" size={72}></MaterialIcon> 
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Follow</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>Name of the user</Text>
      <Text style={styles.user}>@username</Text>
      <Text style={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
      <Text style={styles.info}>Recife, PE</Text>
      <Text style={styles.info}>wwww.github.com/albjoaov</Text>
      <Text style={styles.info}>30/05/1997</Text>
      <Text style={styles.info}>Entrou em</Text>
      <View style={styles.followContainer} >
        <Text style={styles.number}>947</Text>
        <Text style={styles.followContainerText}>Following</Text>
        <Text style={styles.number}>1012</Text>
        <Text style={styles.followContainerText}>Followers</Text>
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

    headerContainer: {
      flexDirection: "row",
      alignItems: "center",
    },

    name: {
      fontSize: 28,
      color: "#000",
    },

    user: {
      fontSize: 18,
      color: "#999",
    },

    bio: {
      fontSize: 15,
      lineHeight: 20,
      color: "#1C2022",
      marginVertical: 10
    },

    info: {
      fontSize: 16,
      color: "#999",
    },

    followContainer: {
      flexDirection: "row",
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 7,
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



});
