import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

import { StackActions, NavigationActions } from 'react-navigation'

export default class Login extends Component {

  static navigationOptions = {
    header: null
  }
  
  handleLogin = () => {
    this.props.navigation.navigate("Feed");
    // this.navigateToTimeline();
  }

  navigateToTimeline = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Feed'})]
    });

    this.props.navigation.dispatch(resetAction);
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.content}>
          <Icon name="twitter" size={64} color="#4BB0EE" />

          <TextInput
            style={styles.input}
            placeholder="Type your email adress or username"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            returnKeyType="go"
            onSubmitEditing={this.handleLogin}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
              <Text style={styles.buttonText}> Log in </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgotPassword} onPress={() => {}}>
              <Text style={styles.forgotPasswordText}> Forgot your password? </Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    height: 44,
    paddingHorizontal: 15,
    alignSelf: "stretch",
    marginTop: 15
  },

  button: {
    height: 44,
    alignSelf: "stretch",
    marginTop: 10,
    backgroundColor: "#4BB0EE",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },

  forgotPassword: {
    height: 44,
    alignSelf: "stretch",
    marginTop: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  forgotPasswordText: {
    color: "#000",
    fontSize: 16,
  }

});