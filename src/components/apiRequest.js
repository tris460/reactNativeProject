import React from "react";
import { StyleSheet, View, Text, Alert, ImageBackground, TextInput, Button } from "react-native";
import axios from 'axios';

const apiRequest = () => {
    latLon = { 
        lat: 21.87202038522148,
        lon: -102.29439220883894 
    }
    data = {
        name: '',
        country: '',
        localtime: '',
        temperature: '',
        weather: '',
    }
    const getData = (lat, lon) => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=&query=${lat},${lon}`)
            .then(function (response) {
                //Alert.alert(JSON.stringify(response.data.location.name));
                this.data.name = response.data.location.name;
                this.data.country = response.data.location.country;
                this.data.localtime = response.data.location.localtime;
                this.data.temperature = response.data.current.temperature;
                this.data.weather = response.data.current.weather_descriptions[0];
                
            })
            .catch(function (error) {
                Alert.alert(error);
            })
    }
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.img}
                resizeMode="cover"
                source={{uri: 'https://cdn.shopify.com/s/files/1/0254/9396/2849/products/fotomural-paisaje-soleado-Dekoadhesivo_1400x.jpg?v=1576518689'}}
            >
                <View style={styles.readData}>
                    <Text style={styles.title}>Get the weather from...</Text>
                    <TextInput 
                        style={styles.coords} 
                        placeholder="Latitude. Ex: 1312.461" 
                        placeholderTextColor="#bbb" 
                        underlineColorAndroid="#2af"
                        keyboardType="numeric"
                        onChangeText={(text) => this.latLon.lat = text}
                        defaultValue='21.87202038522148'
                    ></TextInput>
                    <TextInput 
                        style={styles.coords} 
                        placeholder="Longitude. Ex: 1923.112" 
                        placeholderTextColor="#bbb"
                        underlineColorAndroid="#2af" 
                        keyboardType="numeric"
                        onChangeText={(text) => this.latLon.lon = text}
                        defaultValue='-102.29439220883894'
                    ></TextInput>
                    <Button
                        title="Get!"
                        onPress={() => getData(this.latLon.lat, this.latLon.lon)}
                    />
                </View>
                <View>
                    <Text style={styles.text}>Name: {this.data.name}</Text>
                    <Text style={styles.text}>Country: {this.data.country}</Text>
                    <Text style={styles.text}>Localtime: {this.data.localtime}</Text>
                    <Text style={styles.text}>Temperature: {this.data.temperature}</Text>
                    <Text style={styles.text}>Weather: {this.data.weather}</Text>
                </View>
                <Text style={styles.ownerText}>Beatriz Martínez Pérez</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 22,
        color: "#fff",
        margin: 25,
    },
    coords: {
        color: "#fff",
        fontSize: 18,
        margin: 10,
    },
    readData: {
        backgroundColor: "#145489",
        position: "absolute",
        top: -1,
        width: "100%"
    },
    text: {
        color: "#fff",
        margin: 3,
        fontSize: 22,
    },
    ownerText: {
        color: "#fff",
        fontSize: 25,
        backgroundColor: "#145489",
        textAlign: "center",
        position: "absolute",
        bottom: 1,
        width: '100%'
    },
});

export default apiRequest;
