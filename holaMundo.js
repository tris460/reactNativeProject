import React from "react";
import { Text, View, StyleSheet, Image } from 'react-native';

const HolaMundo = () => {
    return(
        <View style = {styles.container}>
            <Image style = {styles.image} source = {require('./assets/pikachu.png')} />
            <Text style = {styles.textTitle}>Hola Mundo</Text>
            <Text style = {styles.textName}>Beatriz Martínez</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textTitle: {
        fontSize: 40,
        color: "black",
        fontWeight: "bold"
    },
    textName: {
        fontFamily: "Consolas",
        fontSize: 20
    },
    image: {
        maxWidth: 250,
        maxHeight: 250,
        alignItems: "center"
    }
});

export default HolaMundo;
