import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    const [fruits, setFruits] = useState([]);
    const [expandedIndex, setExpandedIndex] = useState(-1);
    const fetchFruits = () => {
      fetch('https://www.fruityvice.com//api/fruit/all', {method: 'GET'})
        .then(resp => resp.json())
        .then(newFruits => setFruits(newFruits))
        .catch(err => console.error(err));
    };
    useEffect(() => {
      fetchFruits();
    }, []);
    const renderFruit = ({item: fruitItem, index}) => {
      const {carbohydrates, protein, fat, calories, sugar} = fruitItem.nutritions;
      return (
        <Pressable
        onPress={() =>
          expandedIndex === index
          ? setExpandedIndex(-1)
          : setExpandedIndex(index)
        }>
          <View style={styles.fruitContainer}>
            <Text style={styles.fruitName}>
              Name: {fruitItem.name}
            </Text>
            <Text style={styles.regularText}>Family: {fruitItem.family}</Text>
            {expandedIndex === index && (
              <View>
                <Text style={styles.regularText}>
                  Carbohydrates: {carbohydrates}g
                </Text>
                <Text style={styles.regularText}>
                  Protein:{' '} {protein}g, 
                </Text>
                <Text style={styles.regularText}>
                  Calories: {calories}g
                </Text>
                <Text style={styles.regularText}>
                  Sugar:{' '}{sugar}g
                </Text>
                <Text style={styles.regularText}>
                  Fat: {fat}g
                </Text>
              </View>
            )}
          </View>
        </Pressable>
      );
    };
    return (
      <SafeAreaView style={styles.container}>      
      <Image 
        style={styles.logo} 
        source={require('../../assets/logo.png')}></Image>
        <FlatList
          keyExtractor={item => item.name}
          data={fruits}
          renderItem={renderFruit}
        />
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#fff',
    },
    logo: {
      width: 130,
      height: 130,
      alignSelf: 'center',
      marginTop: 15,
    },
    fruitContainer: {
      margin: 5,
      padding: 8,
      backgroundColor: "#1e6d65",
      borderRadius: 5,
    },
    fruitName: {
      fontSize: 18,
      color: '#fff',
      fontWeight: '600',
      marginLeft: 5,
    },
    regularText: {
      color: '#eee',
      fontSize: 14,
    },
  });
