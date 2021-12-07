import React from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert, SegmentedControlIOS } from "react-native";

const alertWithInfo = () => {
    state = {
        name: '',
        age: 0,
        email: ''
    };
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Nombre</Text>
          <TextInput style={styles.text} placeholder='Erick Vázquez' onChangeText={(text) => this.state.name = text}/>
          <Text style={styles.text}>Edad</Text>
          <TextInput style={styles.text} placeholder="18" onChangeText={(text) => this.state.age = text}/>
          <Text style={styles.text}>Correo</Text>
          <TextInput style={styles.text} placeholder="example@example.com" onChangeText={(text) => this.state.email = text}/>
          <Button
            title="Saludar"
            onPress={() => Alert.alert('Hola ' + this.state.name + ' tienes ' + this.state.age + ' años, te enviamos un correo a: ' + this.state.email)}
          />
        </View>
      );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        padding: 20,
        backgroundColor: '#cff',
    },
    text: {
        fontSize: 20
    }
})

export default alertWithInfo;