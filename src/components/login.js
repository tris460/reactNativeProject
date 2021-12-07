import React, { useState } from "react";
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, ScrollView, Alert } from "react-native";
import axios from "axios";

const login = ({ navigation }) => {
    // Constants for the user credentials
    const [email, setEmail] = useState(0);
    const [pass, setPass] = useState(0);
    
    // Get the data from the API
    const fetchUsers = (email, pass) => {
        axios.get(`https://jsonplaceholder.typicode.com/users?email=${email}`)
        .then(function (res) {
            if(res.data.length > 0) { // Verify it it return any response
                if(pass == res.data[0].address.zipcode) { // Verify the credentials 
                    navigation.navigate('Menu');
                } else {
                    Alert.alert('Try again', 'Email or password incorrect');
                }
            } else {
                Alert.alert('Try again', 'Email or password incorrect'); // The petition did not return anything
            }
        })
        .catch(err => console.error(err));
    }
    
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Component for the logo */}
                <Image 
                style={styles.logo} 
                source={require('../../assets/logo.png')}></Image>
                {/* Input for the user's email */}
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    onChangeText={(text) => setEmail(text)}
                />
                {/* Input for the password */}
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    password={true}
                    secureTextEntry={true}
                    onChangeText={(text) => setPass(text)}
                />
                {/* Button to call the API and verify user's credentials */}
                <TouchableOpacity
                    style={styles.button}
                    onPress = {() => {
                        fetchUsers(email, pass)
                    }}
                >
                    <Text style={styles.textButton}>Login</Text>    
                </TouchableOpacity>             
            </View>
        </ScrollView>
    );
};

// Styles for the elements
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
        borderBottomColor: "#1e6d65",
        borderLeftColor: "#1e6d65",
        borderTopColor: "#fff",
        borderRightColor: "#fff",
        fontSize: 20,
    },
    button: {
        backgroundColor: "#1e6d65",
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