import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LotsOfStyles = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.red}>Only changes letter color</Text>
        <Text style={styles.bigBlue}>Big letter and changes the color</Text>
        <Text style={[styles.bigBlue, styles.red]}>Blue and big letter, then red letter</Text>
        <Text style={[styles.red, styles.bigBlue]}>Red letter and then, big and blue letter</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default LotsOfStyles;