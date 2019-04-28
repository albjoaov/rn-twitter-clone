import React, { Component } from 'react';

import { ScrollView, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { bold } from 'ansi-colors';

export default class Trending extends Component {

  static navigationOptions = () => ({
    title: "Trending topics",
    headerTintColor: '#4BB0EE',
    headerTitleStyle: {alignSelf: 'center', textAlign: 'center'},
  });

  render() {
    return (
    
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Recife trends | </Text>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Change?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.trend}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Game of Thrones</Text>
        </TouchableOpacity>
        <Text style={styles.trendText}>61.3K Tweets</Text>
      </View>

      <View style={styles.trend}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>#globovivadominguinhos</Text>
        </TouchableOpacity>
        <Text style={styles.trendText}>1,897 Tweets</Text>
      </View>
      <View style={styles.trend}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>#ufcnocombate</Text>
        </TouchableOpacity>
        <Text style={styles.trendText}>3,030 Tweets</Text>
      </View>
      <View style={styles.trend}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Ezequiel</Text>
        </TouchableOpacity>
        <Text style={styles.trendText}>3,777 Tweets</Text>
      </View>
      <View style={styles.trend}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Bruno Henrique</Text>
        </TouchableOpacity>
        <Text style={styles.trendText}>Flamengo derrota Cruzeiro na primeira rodada do Brasileirão</Text>
      </View>
      <View style={styles.trend}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>#AvengersEndgame</Text>
        </TouchableOpacity>
        <Text style={styles.trendText}>6,790 Tweets</Text>
      </View>
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  titleContainer: {
    flexDirection: "row",
    alignSelf: 'center', 
    textAlign: 'center',
    alignItems: 'center',
    padding: 35
  },

  title: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 24,
  },
  
  trend: {
    alignSelf: 'center', 
    textAlign: 'center',
    padding: 15
  },

  trendText: {
    color: "#999",
    fontSize: 16,
    alignSelf: 'center', 
    textAlign: 'center',
  },

  buttonText: {
    color: "#4BB0EE",
    fontSize: 18,
    alignSelf: 'center', 
    textAlign: 'center',
  },


});