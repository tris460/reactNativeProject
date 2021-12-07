import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

const menu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image 
            style={styles.logo} 
            source={require('../../assets/logo.png')}></Image>
            <TouchableOpacity
                style={styles.button}
                onPress = {() => {
                    navigation.navigate('Fruits')
                }}
            >
                <Text style={styles.textButton}>Fruit's Information</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress = {() => {
                    navigation.navigate('Add Fruit')
                }}
            >
                <Text style={styles.textButton}>Add Fruit</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress = {() => {
                    navigation.navigate('About')
                }}
            >
                <Text style={styles.textButton}>About</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flex: 1,
        backgroundColor: "#fff",
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 20,
    },
    button: {
        backgroundColor: "#1e6d65",
        margin: 10,
        padding: 18,
        borderRadius: 10,
        alignItems: "center"
    },
    textButton: {
        fontSize: 18,
        color: "#fff"
    }
})

export default menu;