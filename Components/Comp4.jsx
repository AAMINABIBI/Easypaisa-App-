import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const EightIconsNavbar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="download" size={40} color="#16ba64" style={styles.icon} />
        <Text style={styles.label}>EasyLoad</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="handshake-o" size={40} color="#16ba64" style={styles.icon} />
        <Text style={styles.label}>Easycash Loan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="gift" size={40} color="#16ba64" style={styles.icon} />
        <Text style={styles.label}>Tohfa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="envelope" size={40} color="#16ba64" style={styles.icon} />
        <Text style={styles.label}>Invite & Earn</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="bell" size={40} color="#16ba64" style={styles.icon} />
        <Text style={styles.label}>Raast Payment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="calendar" size={40} color="#16ba64" style={styles.icon} />
        <Text style={styles.label}>Mini App</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="camera" size={40} color="#16ba64" style={styles.icon} />
        <Text style={styles.label}>Savings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="info-circle" size={40} color="#16ba64" style={styles.icon} />
        <Text style={styles.label}>Insurance</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="info-circle" size={40} color="#16ba64" style={styles.icon} />
        <Text style={styles.label}>Donation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="battery-1" size={40} color="#16ba64" style={styles.icon} />
        <Text style={styles.label}>Rs. 1 Game</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="dot-circle-o" size={40} color="#16ba64" style={styles.icon} />
        <Text style={styles.label}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    elevation: 10, // for Android shadow
    padding: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%', // Adjust the width based on the number of icons per row
    marginVertical: 10,
  },
  icon: {
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 15,

  },
});

export default EightIconsNavbar;
