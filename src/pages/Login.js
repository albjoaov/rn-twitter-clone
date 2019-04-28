import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableNativeFeedback, 
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

// import { TextInput } from 'react-native-gesture-handler';

export default class Login extends Component {

  static navigationOptions = { 
    header: null
  }

  state = {
    username: '',
  };

  handleInputChange = (username) => {
    this.setState({ username });
  }

  handleLogin = () => {
    this.props.navigation.navigate('Feed')
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.content}>
          <Icon name="Twitter" size={64} color="#4BB0EE" />

          <TextInput
            style={styles.input}
            placeholder="Nome do usuário"
            value={this.state.username}
            onChangeText={this.handleInputChange}
          />

          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Text styles={styles.buttonText}>Entrar</Text>
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
    marginTop: 30
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
    fontWeight: "bold"
  }
});