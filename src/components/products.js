import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    // Definition of constants
    const [fruits, setFruits] = useState([]);
    const [expandedIndex, setExpandedIndex] = useState(-1);

    // Petition to the API
    const fetchFruits = () => {
        fetch('https://www.fruityvice.com//api/fruit/all', {method: 'GET'})
            .then(resp => resp.json())
            .then(newFruits => setFruits(newFruits)) // Assign the value to the constant
            .catch(err => console.error(err));
        };
    useEffect(() => {
        fetchFruits(); // Calls the API once when the component is ready, once because the dependencies' array is empty
    }, []);

    const renderFruit = ({item: fruitItem, index}) => {
        const {carbohydrates, protein, fat, calories, sugar} = fruitItem.nutritions; // Get the data and save it in there
        return (
            // Create the element to show the extra info when the user clicks
            <Pressable
            onPress={() =>
                expandedIndex === index
                ? setExpandedIndex(-1)
                : setExpandedIndex(index)
            }>
                {/* Create the container for the fruit info */}
                <View style={styles.fruitContainer}>
                    {/* Container for the fruit name */}
                    <Text style={styles.fruitName}>
                        Name: {fruitItem.name}
                    </Text>
                    {/* Container for the fruit family */}
                    <Text style={styles.regularText}>Family: {fruitItem.family}</Text>
                    {/* Data to show when the user clicks */}
                    {expandedIndex === index && (
                        <View>
                            {/* Set the data from the API */}
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
        // Create the view for the components
        <SafeAreaView style={styles.container}>  
            {/* Component for the logo */}
            <Image 
                style={styles.logo} 
                source={require('../../assets/logo.png')}></Image>
            {/* Component to show each fruit */}
            <FlatList
                keyExtractor={item => item.name}
                data={fruits}
                renderItem={renderFruit}
            />
        </SafeAreaView>
    );
  }

  // Styles for the elements
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
