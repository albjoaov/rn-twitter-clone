import React, { Component } from 'react';

import { SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


// import { Container } from './styles';

export default class NewTweet extends Component {

  static navigationOptions = {
    header: null
  };

  goBack = () => {
    this.props.navigation.pop();
  }

  render() {
    return (

        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={this.goBack}>
              <Icon name="close" size={24} color="#4BB0EE"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Tweet</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.input}
            multiline
            placeholder="What's happening?">
          </TextInput>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.footerItem}>
              <Icon name="image" size={32} color="#4BB0EE"></Icon>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.footerItem}>
              <Icon name="gif" size={32} color="#4BB0EE"></Icon>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.footerItem}>
              <Icon name="poll" size={32} color="#4BB0EE"></Icon>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.footerItem}>
              <SimpleLineIcons name="location-pin" size={32} color="#4BB0EE"></SimpleLineIcons>
            </TouchableOpacity>
            
            <View style={styles.footerThreadButtonContainer}>
              <Icon style={styles.footerItem} name="circle-outline" size={32} color="#4BB0EE"></Icon>
              <Text style={styles.footerText}> | </Text>
              <TouchableOpacity  style={styles.footerItem}>
                <SimpleLineIcons name="plus" size={32} color="#4BB0EE"></SimpleLineIcons>
              </TouchableOpacity>
            </View>
          </View>

        </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  header: {
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  button: {
    height: 32,
    paddingHorizontal: 20,
    borderRadius: 16,
    backgroundColor: "#4BB0EE",
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  },

  input: {
    margin: 20,
    fontSize: 16,
    color: "#000"
  },

  footer: {
    flex: 1,
    flexDirection: "row",
    position: 'absolute',
    bottom: 0,
    padding: 10,
  },

  footerItem: {
    flex: 0.95,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

  },

  footerText: {    
    fontSize: 20,
    color: "#D2D7D3"

  },

  footerThreadButtonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  }

});
