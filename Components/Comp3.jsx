import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const texts=[
{name:'money' ,text:'send MONEY'},
{name:'bank',text:'Bank Payment'},
{name:'mobile',text:'Mobile Packages'}


];


const Comp3 = () => {

  return (


    <ScrollView horizontal={true} style={styles.scrollView}>

   
{texts.map((text,index)=>(
      <TouchableOpacity style={styles.box} key={index} >
        <FontAwesome name={text.name} size={20} color="#16ba64" style={{ margin: 15 }} />
        <Text style={{ fontWeight: 'bold', fontSize: 13 }}>{text.text}</Text>
      </TouchableOpacity>
    ))}
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
