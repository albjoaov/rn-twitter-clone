import React, { Component } from 'react';

import { ScrollView, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Trending extends Component {

  static navigationOptions = () => ({
    title: "Trending topics",
    headerTintColor: '#4BB0EE',
    headerTitleStyle: {alignSelf: 'center', textAlign: 'center', width: '85%'},
  });

  render() {
    return (
    
    <ScrollView style={styles.container}>
      <Text>Recife trends | </Text>
      <TouchableOpacity>
        <Text>Change?</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity>
          <Text>Trend 1</Text>
        </TouchableOpacity>
        <Text>Tweets counter</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text>Trend 2</Text>
        </TouchableOpacity>
        <Text>Tweets counter</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text>Trend 3</Text>
        </TouchableOpacity>
        <Text>Tweets counter</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text>Trend 3</Text>
        </TouchableOpacity>
        <Text>Tweets counter</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text>Trend 4</Text>
        </TouchableOpacity>
        <Text>Tweets counter</Text>
      </View>

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