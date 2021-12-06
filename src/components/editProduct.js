import React, { useState } from "react";
import { StyleSheet, View, Image, TextInput, Text, ScrollView, Alert, Button } from "react-native";

const sendData = (genus, name, family, order, carb, protein, fat, calories, sugar) => {
    carb = parseFloat(carb);
    protein = parseFloat(protein);
    fat = parseFloat(fat);
    calories = parseFloat(calories);
    sugar = parseFloat(sugar);
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
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
    fetch('https://www.fruityvice.com//api/fruit', requestOptions)
            .then(response => response.json())
            .then(response => console.log(response))
            .then(response => Alert.alert('Success', 'The fruit sent will be reviewed and eventually be added to the database!'))
            .catch(err => Alert.alert('A error have been occurred', err));
}

const editProduct = ({ navigation }) => {
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
                <Image 
                style={styles.logo} 
                source={require('../../assets/logo.png')}></Image>
                <Text style={styles.textTitle}>Fruit Information</Text>
                <Text style={styles.text}>Genus</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. Malus"
                    onChangeText={(text) => setGenus(text)}
                />
                <Text style={styles.text}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. Apple"
                    onChangeText={(text) => setName(text)}
                />
                <Text style={styles.text}>Family</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. Rasaceae"
                    onChangeText={(text) => setFamily(text)}
                />
                <Text style={styles.text}>Order</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. Rosales"
                    onChangeText={(text) => setOrder(text)}
                />
                <Text style={styles.textTitle}>Nutritions</Text>
                <Text style={styles.text}>Carbohydrates</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. 11.4"
                    keyboardType="numeric"
                    onChangeText={(text) => setCarb(text)}
                />
                <Text style={styles.text}>Protein</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. 0.3"
                    keyboardType="numeric"
                    onChangeText={(text) => setProtein(text)}
                />
                <Text style={styles.text}>Fat</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. 0.4"
                    keyboardType="numeric"
                    onChangeText={(text) => setFat(text)}
                />
                <Text style={styles.text}>Calories</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. 52"
                    keyboardType="numeric"
                    onChangeText={(text) => setCalories(text)}
                />
                <Text style={styles.text}>Sugar</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. 10.3"
                    keyboardType="numeric"
                    onChangeText={(text) => setSugar(text)}
                />
                <Button
                    title="Add product"
                    color="#1e6d65"
                    onPress={() => sendData(genus, name, family, order, carb, protein, fat, calories, sugar)}
                />
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