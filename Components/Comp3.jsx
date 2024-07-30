import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Comp3 = () => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <TouchableOpacity style={styles.box}>
        <FontAwesome name="money" size={20} color="#16ba64" style={{ margin: 15 }} />
        <Text style={{ fontWeight: 'bold', fontSize: 13 }}>Send Money</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <FontAwesome name="bank" size={20} color="#16ba64" style={{ margin: 15 }} />
        <Text style={{ fontWeight: 'bold', fontSize: 13 }}>Bank Payment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <FontAwesome name="mobile" size={40} color="#16ba64" style={{ margin: 15 }} />
        <Text style={{ fontWeight: 'bold', fontSize: 11 }} f>Mobile Packages</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    margin: 20,

  },
  box: {
    height: 100,
    width: 105,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Comp3;
