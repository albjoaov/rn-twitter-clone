import React, { Component } from 'react'

import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Tweet extends Component {

    state = {
        likeCounter: 0,
        retweetCounter: 0,
        commentCounter: 0
      };
    
    handleLike = () => {
      this.setState({ likeCounter: this.state.likeCounter + 1 })
    }

    handleRetweet = () => {
      this.setState({ retweetCounter: this.state.retweetCounter + 1 })
    }

    handleComment = () => {
      this.setState({ commentCounter: this.state.commentCounter + 1 })
    }

    handleNavigateToProfile = () => {
    }

    render () {
        return (
        <View style={styles.container}>
            <View style={styles.tweetHeader}>
                <TouchableOpacity onPress={this.handleNavigateToProfile}>
                    <Icon name="circle" size={48}></Icon>
                </TouchableOpacity>
                <Text style={styles.author}>Name</Text>
                <Text style={styles.authorAt}>@username</Text>
            </View>
            <Text style={styles.content}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </Text>
            <View style={styles.tweetFooter}>
                <View style={styles.footerIcons}>
                    <TouchableOpacity onPress={this.handleComment} style={styles.button}>
                        <Icon name="comment" size={20} color="#999"/>
                        <Text style={styles.textButton}>{this.state.commentCounter}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerIcons}>
                    <TouchableOpacity onPress={this.handleRetweet} style={styles.button}>
                        <Icon name="retweet" size={20} color="#999"/>
                        <Text style={styles.textButton}>{this.state.retweetCounter}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerIcons}>
                    <TouchableOpacity onPress={this.handleLike} style={styles.button}>
                        <Icon name="heart" size={20} color="#999"/>
                        <Text style={styles.textButton}>{this.state.likeCounter}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerIcons}>
                    <TouchableOpacity onPress={ () => {} } style={styles.button}>
                        <Icon name="share-alt" size={20} color="#999"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        )}
}

const styles = StyleSheet.create({

    container: {
        padding: 20,
        borderBottomWidth: 1,
        borderColor: "#eee"
    },

    tweetHeader: {
        flexDirection: "row",
    },

    author: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: "bold",
        color: "#1C2022",
        marginTop: 10
    },

    authorAt: {
        marginLeft: 10,
        fontSize: 16,
        color: "#999",
        marginTop: 10
    },
  
    content: {
        fontSize: 15,
        lineHeight: 20,
        color: "#1C2022",
        marginVertical: 10
      
    },

    tweetFooter: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 0
    },

    footerIcons: {
        flexDirection: "row",
        alignItems: "center"
      },
  
    button: {
        flexDirection: "row",
        alignItems: "center"
    },
  
    textButton: {
        color: "#999",
        marginLeft: 5
    }
});
  