import React, { useState } from "react";
import { StyleSheet, View, Image, TextInput, Text, ScrollView, Alert, Button } from "react-native";

// Function to send data to the API
const sendData = (genus, name, family, order, carb, protein, fat, calories, sugar) => {
    // Change the strings to a number
    carb = parseFloat(carb);
    protein = parseFloat(protein);
    fat = parseFloat(fat);
    calories = parseFloat(calories);
    sugar = parseFloat(sugar);

    // Configuration for the API
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ // Which data will it send for the request
            genus: genus,
            name: name,
            family: family,
            order: order,
            nutritions: {
              carbohydrates: carb,
              protein: protein,
              fat: fat,
              calories: calories,
              sugar: sugar
            }
          })
    };
    // Petition to the API
    fetch('https://www.fruityvice.com//api/fruit', requestOptions)
            .then(response => response.json())
            .then(response => Alert.alert('Success', 'The fruit sent will be reviewed and eventually be added to the database!'))
            .catch(err => Alert.alert('A error have been occurred', err));
}

// Main function
const editProduct = ({ navigation }) => {
    // Generate constants
    const [genus, setGenus] = useState(0);
    const [name, setName] = useState(0);
    const [family, setFamily] = useState(0);
    const [order, setOrder] = useState(0);
    const [carb, setCarb] = useState(0);
    const [protein, setProtein] = useState(0);
    const [fat, setFat] = useState(0);
    const [calories, setCalories] = useState(0);
    const [sugar, setSugar] = useState(0);

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Logo image */}
                <Image 
                style={styles.logo} 
                source={require('../../assets/logo.png')}></Image>
                <Text style={styles.textTitle}>Fruit Information</Text>
                
                {/* Input for thr fruit genus */}
                <Text style={styles.text}>Genus</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. Malus"
                    placeholderTextColor="#999"
                    onChangeText={(text) => setGenus(text)}
                />
                
                {/* Input for the fruit name */}
                <Text style={styles.text}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. Apple"
                    placeholderTextColor="#999"
                    onChangeText={(text) => setName(text)}
                />
                
                {/* Input for the fruit family */}
                <Text style={styles.text}>Family</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. Rasaceae"
                    placeholderTextColor="#999"
                    onChangeText={(text) => setFamily(text)}
                />

                {/* Input for the fruit order */}
                <Text style={styles.text}>Order</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. Rosales"
                    placeholderTextColor="#999"
                    onChangeText={(text) => setOrder(text)}
                />

                <Text style={styles.textTitle}>Nutritions</Text>

                {/* Input for the carbohydrates */}
                <Text style={styles.text}>Carbohydrates</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. 11.4"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    onChangeText={(text) => setCarb(text)}
                />

                {/* Input for the protein */}
                <Text style={styles.text}>Protein</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. 0.3"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    onChangeText={(text) => setProtein(text)}
                />

                {/* Input for the fats */}
                <Text style={styles.text}>Fat</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. 0.4"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    onChangeText={(text) => setFat(text)}
                />

                {/* Input for the calories */}
                <Text style={styles.text}>Calories</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. 52"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    onChangeText={(text) => setCalories(text)}
                />

                {/* Input for the sugar */}
                <Text style={styles.text}>Sugar</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. 10.3"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    onChangeText={(text) => setSugar(text)}
                />

                {/* Button for add a fruit in the API */}
                <Button
                    title="Add product"
                    color="#1e6d65"
                    onPress={() => sendData(genus, name, family, order, carb, protein, fat, calories, sugar)}
                />
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
        width: 100,
        height: 100,
        marginTop: 20,
        marginLeft: 20,
        alignSelf: 'center'
    },
    input: {
        margin: 10,
        marginTop: 0,
        borderWidth: 2,
        borderBottomColor: "#1e6d65",
        borderLeftColor: "#1e6d65",
        borderTopColor: "#fff",
        borderRightColor: "#fff",
        color: '#000',
        fontSize: 16,
        padding: 3,
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