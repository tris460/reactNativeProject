import React from "react";
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text } from "react-native";

const login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image 
            style={styles.logo} 
            source={require('../../assets/logo.jpeg')}></Image>
            <TextInput
                style={styles.input}
                placeholder="E-mail"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                password={true}
            />
            <TouchableOpacity
                style={styles.button}
                onPress = {() => {
                    navigation.navigate('Menu')
                }}
            >
                <Text style={styles.textButton}>Login</Text>    
            </TouchableOpacity>            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        display: 'flex',
    },
    logo: {
        width: 250,
        height: 250,
        alignSelf: 'center',
        marginTop: 20,
    },
    input: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderWidth: 2,
        borderBottomColor: "#75c9bc",
        borderLeftColor: "#75c9bc",
        borderTopColor: "#fff",
        borderRightColor: "#fff",
        fontSize: 20,
    },
    button: {
        backgroundColor: "#75c9bc",
        margin: 10,
        padding: 15,
        borderRadius: 10,
        alignItems: "center"
    },
    textButton: {
        fontSize: 18,
        color: "#fff"
    }
});

export default login;