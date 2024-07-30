import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Comp2 = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../Assets/th.jpeg')} style={styles.easypaisaIcon} />
                <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Available Balance </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Rs 1360</Text>
                    <FontAwesome name="arrow-circle-right" size={20} color="black" style={{ margin: 10 }} />

                </View>
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name="circle-thin" size={15} color="black" />
                    <Text style={{ fontSize: 10, fontWeight: 'bold', marginLeft: 15 }}>Updated just now </Text>

                </View>
            </View>
            <View style={{ marginLeft: 30 }}>
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name="dollar" size={15} style={styles.dollarIcon} />
                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 10 }}>My Rewards </Text>
                </View>
                <TouchableOpacity style={styles.btn}  >
                    <Text>Upgrade Account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2}  >
                    <Text style={{ color: '#ffffff' }}>Upgrade Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10,
        padding: 15,
        flexDirection: 'row'
    },
    easypaisaIcon: {
        height: 30,
        width: 120,
        margin: 5
    },
    dollarIcon: {
        color: "white",
        backgroundColor: '#f9be05',
        borderRadius: 50,
        height: 20,
        width: 20,
        padding: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        height: 40,
        width: 130,

        borderRadius: 30,
        borderColor: '#16ba64',
        borderWidth: 3,
        justifyContent: 'center',
        padding: 5,
        margin: 10,
        fontWeight: 'bold'
    },
    btn2: {
        height: 40,
        width: 130,
        borderRadius: 30,
        borderColor: '#16ba64',
        borderWidth: 3,
        justifyContent: 'center',
        padding: 5,
        marginLeft: 10,
        fontWeight: 'bold',
        marginBottom: -3,
        backgroundColor: '#16ba64'
    }
})
export default Comp2
