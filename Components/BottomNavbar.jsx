import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
const BottomNavbar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="home" size={20} color="#16ba64" style={styles.icon} />
        <Text style={styles.label}>Send Money</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <SimpleLineIcons name="location-pin" size={20}  style={styles.icon} />
        <Text style={styles.label}>Cash-Points</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <FontAwesome name="scribd" size={20}  style={styles.iconscan} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="film" size={20}  style={styles.icon} />
        <Text style={styles.label}>Promotion</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="user" size={20}  style={styles.icon} />
        <Text style={styles.label}>My Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    elevation: 10, // for Android shadow
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    margin: 15,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 13,
    
  },
  iconscan:{
//backgroundColor:'green',
fontSize:40,
color:'#16ba64',
elevation:10,

  }
});

export default BottomNavbar;
