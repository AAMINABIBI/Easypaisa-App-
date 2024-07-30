import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class Comp1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <Image source={require('../Assets/mee.png')}
            style={styles.imageStyle} />
          <Image source={require('../Assets/th.jpeg')}
            style={styles.easypaisaIcon} />
          <FontAwesome name="search" size={20} color="black" style={styles.searchIcon} />
          <Ionicons name="notifications-outline" size={20} color="black" style={styles.notificationIcon} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: 'blue',
    margin: 20,
  },
  easypaisaIcon: {
    height: 40,
    width: 150,
    margin: 20
  },
  container: {
    height: 70,

  },
  searchIcon: {
    margin: 30,
    marginBottom: -10
  },
  notificationIcon: {
    marginTop: 30,
    marginLeft: -20
  }
})
export default Comp1
