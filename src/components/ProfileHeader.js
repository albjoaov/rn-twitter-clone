import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default class ProfileHeader extends Component {
  render() {
    return (
    <View style={styles.container}>
        <Icon name="circle" size={48}></Icon>
        <Text>Nome</Text>
        <Text>Usuario</Text>
        <Text>Biografia</Text>
        <Text>Localização</Text>
        <Text>Link</Text>
        <Text>Nascimento</Text>
        <Text>Entrou em</Text>
        <Text>Following</Text>
        <Text>Followers</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: "#FFF"
    }

});
