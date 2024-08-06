/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Comp1 } from './Components/Comp1'
import Comp3 from './Components/Comp3'
import Comp2 from './Components/Comp2'
import Comp4 from './Components/Comp4'
import BottomNavbar from './Components/BottomNavbar'
const App = () => {

  return (
    <>
      <ScrollView style={styles.basecolor}>
        <Comp1></Comp1>
        < View style={styles.container}>
          <Comp2></Comp2>
        </View>
        <Comp3></Comp3>
        <Comp4></Comp4>
      </ScrollView>
      <BottomNavbar></BottomNavbar>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 165,
    backgroundColor: '#16ba64',
  },
  basecolor: {
    backgroundColor: '#f2f4f4',
    flex: 1
  }

})

export default App;

