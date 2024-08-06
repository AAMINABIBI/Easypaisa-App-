import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const texts=[
  {name:'download',txt:'EasyLoad'},
  {name:'handshake-o',txt:'Easycash Loan'},
  {name:'gift',txt:'Tohfa'},
  {name:'envelope',txt:'Invite & Earn'},
  {name:'bell',txt:'Raast Payment'},
  {name:'calendar',txt:'Mini App'},
  {name:'camera',txt:'Savings'},
  {name:'info-circle',txt:'Insurance'},
  {name:'battery-1',txt:'Rs. 1 Game'},
  {name:'info-circle',txt:'Donation'},
  {name:'dot-circle-o',txt:'See All'},
]
const EightIconsNavbar = () => {
  return (
    <View style={styles.container}>

  {texts.map((text,index)=>(<TouchableOpacity key={index}  style={styles.button}>
        <FontAwesome name={text.name} size={40} color="#16ba64" style={styles.icon} />
        <Text style={styles.label}>{text.txt}</Text>
      </TouchableOpacity>))}
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
