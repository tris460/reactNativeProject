import React from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";

const products = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image 
                style={styles.logo} 
                source={require('../../assets/logo.jpeg')}></Image>
                <View style={styles.container}>
                    <View style={styles.productContainer}>
                        <View style={styles.imgProduct}>
                            <Image style={styles.image} source={{uri: 'https://tse3.mm.bing.net/th?id=OIP.a46KCUdEuRQPp-DIrUegTAHaFj&pid=Api'}}></Image>
                        </View>
                        <View style={styles.textProduct}>
                            <Text style={styles.text, styles.textName}>Product Name</Text>
                            <Text style={styles.text, styles.price}>Price</Text>
                            <Text style={styles.text, styles.description}>Description</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flex: 1,
        backgroundColor: "#fff",
    },
    productContainer: {
        margin: 5,
        padding: 3,
        flexWrap: "wrap",
        maxHeight: 100,
        borderColor: "#CAE2FE",
        borderRadius: 5,
        borderWidth: 2
    },
    logo: {
        width: 130,
        height: 130,
        alignSelf: 'center',
        marginTop: 15,
    },
    imgProduct: {
        width: 130,
        height: 100,
        marginLeft: 5
    },
    image: {
        height: '70%',
        width: '70%'
    }, 
    textProduct: {},
    textName: {
        fontSize: 18,
        color: "#333",
    },
    price: {
        fontSize: 15,
        color: "#111",
    },
    description: {},
})

export default products;