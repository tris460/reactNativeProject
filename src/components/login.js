import React from "react";
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, ScrollView } from "react-native";

const login = ({ navigation }) => {
    return (
        <ScrollView>
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
                    secureTextEntry={true}
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
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        display: 'flex',
        backgroundColor: "#fff",
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
        borderBottomColor: "#CAE2FE",
        borderLeftColor: "#CAE2FE",
        borderTopColor: "#fff",
        borderRightColor: "#fff",
        fontSize: 20,
    },
    button: {
        backgroundColor: "#CAE2FE",
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