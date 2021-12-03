import React from "react";
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, ScrollView } from "react-native";

const editProduct = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image 
                style={styles.logo} 
                source={require('../../assets/logo.jpeg')}></Image>
                <TextInput
                    style={styles.input}
                    placeholder="Product name"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Price"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Image"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Condition"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Category"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Description"
                />
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.textButton}>Add Product</Text>    
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
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 20,
        marginLeft: 20
    },
    input: {
        margin: 10,
        marginTop: 0,
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

export default editProduct;