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
        .then(newFruits => setFruits(newFruits));
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
            <Text style={[styles.fruitName, styles.regularText]}>
              Name: {fruitItem.name}
            </Text>
            <Text style={styles.regularText}>Family: {fruitItem.family}</Text>
            {expandedIndex === index && (
              <Text style={styles.regularText}>
                Carbohydrates: {carbohydrates}g, Protein:{' '}
                {protein}g, Calories: {calories}g, Sugar:{' '}
                {sugar}g, Fat: {fat}g
              </Text>
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
      shadowRadius: 20,
      shadowColor: '#fff',
      shadowOffset: {width: 10, height: 10},
    },
    fruitName: {
      color: '#111111',
      fontSize: 16,
    },
    regularText: {
      color: '#000',
      fontWeight: '600',
    },
  });
