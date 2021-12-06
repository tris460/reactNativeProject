import React from "react";
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, ScrollView } from "react-native";

const editProduct = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image 
                style={styles.logo} 
                source={require('../../assets/logo.png')}></Image>
                <Text style={styles.textTitle}>Fruit Information</Text>
                <Text style={styles.text}>Genus</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. Malus"
                />
                <Text style={styles.text}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. Apple"
                />
                <Text style={styles.text}>Family</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. Rasaceae"
                />
                <Text style={styles.text}>Order</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. Rosales"
                />
                <Text style={styles.textTitle}>Nutritions</Text>
                <Text style={styles.text}>Carbohydrates</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. 11.4"
                    keyboardType="numeric"
                />
                <Text style={styles.text}>Protein</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. 0.3"
                    keyboardType="numeric"
                />
                <Text style={styles.text}>Fat</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. 0.4"
                    keyboardType="numeric"
                />
                <Text style={styles.text}>Calories</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. 52"
                    keyboardType="numeric"
                />
                <Text style={styles.text}>Sugar</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. 10.3"
                    keyboardType="numeric"
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
        backgroundColor: "#fff",
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
        borderBottomColor: "#1e6d65",
        borderLeftColor: "#1e6d65",
        borderTopColor: "#fff",
        borderRightColor: "#fff",
        fontSize: 16,
        padding: 3,
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
    },
    textTitle: {
        fontSize: 18,
        marginLeft: 20,
        color: "#222",
        margin: 10,
    },
    text: {
        fontSize: 15,
        marginLeft: 15,
        color: "#555",
    }
});

export default editProduct;