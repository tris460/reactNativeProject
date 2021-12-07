import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const about = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Logo image */}
            <Image 
            style={styles.logo} 
            source={require('../../assets/logo.png')}></Image>
            {/* Student information */}
            <Text style={styles.textName}>Beatriz Martínez Pérez</Text>
            <Text style={styles.textID}>190343</Text>
            <Text style={styles.group}>4°B</Text>
            <Text style={styles.subject}>DAPPS</Text>
            {/* University logo */}
            <Image 
            style={styles.uni}
            source={{uri: 'https://ariaac.mx/wordpress/wp-content/uploads/2018/08/Universidad-Tecnol%C3%B3gica-de-Aguascalientes.jpg'}}></Image>
        </View>
    )
}

// Styles for the elements
const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center'
    },
    logo: {
        width: 150,
        height: 150,
        marginTop: 20,
    },
    textName: {
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10,
        color: '#444'
    },
    textID: {
        marginLeft: 15,
    },
    group: {
        textAlign: 'center',
        marginTop: 30,
        color: '#555'
    },
    subject: {
        textAlign: 'center',
        color: '#555',
    },
    uni: {
        height: 100,
        width: 100,

    },
})

export default about;