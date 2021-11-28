import React, { useState } from "react";
import { StyleSheet, View, Text, Alert, ImageBackground, TextInput, Button } from "react-native";
import axios from 'axios';

const apiRequest = () => {
    latLon = { 
        lat: 21.87202038522148,
        lon: -102.29439220883894 
    }
    const [name, setName] = useState(0);
    const [country, setCountry] = useState(0);
    const [localtime, setLocaltime] = useState(0);
    const [temp, setTemp] = useState(0);
    const [weather, setWeather] = useState(0);
    const [ico, setIco] = useState('https://cdn.shopify.com/s/files/1/0254/9396/2849/products/fotomural-paisaje-soleado-Dekoadhesivo_1400x.jpg?v=1576518689');

    const getData = (lat, lon) => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=9686c48dcff609c13be49e50f64b968a&query=${lat},${lon}`)
            .then(function (response) {
                const result = response.data;
                setName(result.location.name);
                setCountry(result.location.country);
                setLocaltime(result.location.localtime);
                setTemp(result.current.temperature);
                setWeather(result.current.weather_descriptions[0]);
                setIco(result.current.weather_icons[0]);
            })
            .catch(function (error) {
                Alert.alert(error);
            })
    }
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.img}
                resizeMode="stretch"
                source={{uri: ico}}
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
                    <Text style={styles.text}>Name: {name}</Text>
                    <Text style={styles.text}>Country: {country}</Text>
                    <Text style={styles.text}>Localtime: {localtime}</Text>
                    <Text style={styles.text}>Temperature: {temp}</Text>
                    <Text style={styles.text}>Weather: {weather}</Text>
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
        fontSize: 24,
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
        width: "100%",
    },
    text: {
        color: "#555",
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
