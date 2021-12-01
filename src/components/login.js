import React from "react";
import { StyleSheet, View, Image, TextInput, Button } from "react-native";
import { Icon } from 'react-native-elements';

const infoTech = () => {
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
                // rightIcon= {
                //     type="material-comunity"
                //     name=""
                // }
            />
            <Button
                style={styles.button}
                title="LogIn"
                color="#75c9bc"
            ></Button>            
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
});

export default infoTech;