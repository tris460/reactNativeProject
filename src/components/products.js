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

// const products = ({ navigation }) => {
//     const [response, setResponse] = useState(0);
    
//     const getData = () => {
//         axios
//             .get('https://www.fruityvice.com/api/fruit/all')
//             .then((res) => {
//                 let r = res.data.map((item) => {
//                     return [item];
//                 });
//                 setResponse(r);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     };
//     return (
//         <ScrollView>
//                     <View style={styles.container}>
//                         <Image 
//                         style={styles.logo} 
//                         source={require('../../assets/logo.jpeg')}></Image>
//                         <View style={styles.container}>
//                             <View style={styles.productContainer}>
//                                 <View style={styles.imgProduct}>
//                                     <Image style={styles.image} source={{uri: 'https://tse3.mm.bing.net/th?id=OIP.a46KCUdEuRQPp-DIrUegTAHaFj&pid=Api'}}></Image>
//                                 </View>
//                                 <View style={styles.textProduct}>
//                                     <Text style={styles.text, styles.textName}>{response}</Text>
//                                 </View>
//                             </View>
//                         </View>
//                         </View>
//                         <TouchableOpacity
//                             style={styles.button}
//                             onPress = {getData()}
//                         >
//                             <Text style={styles.textButton}>Get Data</Text>    
//                         </TouchableOpacity>
//                 </ScrollView>          
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         height: "100%",
//         width: "100%",
//         flex: 1,
//         backgroundColor: "#fff",
//     },
//     productContainer: {
//         margin: 5,
//         padding: 3,
//         flexWrap: "wrap",
//         maxHeight: 100,
//         borderColor: "#CAE2FE",
//         borderRadius: 5,
//         borderWidth: 2
//     },
//     logo: {
//         width: 130,
//         height: 130,
//         alignSelf: 'center',
//         marginTop: 15,
//     },
//     imgProduct: {
//         width: 130,
//         height: 100,
//         marginLeft: 5
//     },
//     image: {
//         height: '70%',
//         width: '70%'
//     }, 
//     textProduct: {},
//     textName: {
//         fontSize: 18,
//         color: "#333",
//     },
//     price: {
//         fontSize: 15,
//         color: "#111",
//     },
//     description: {},
//     button: {
//         backgroundColor: "#CAE2FE",
//         margin: 10,
//         padding: 15,
//         borderRadius: 10,
//         alignItems: "center"
//     },
//     textButton: {
//         fontSize: 18,
//         color: "#fff"
//     },
// })

// export default products;

// export default class products extends React.Component {
//     constructor(props) { 
//         super(props);

//         this.state = {
//             loading: false,
//             fruits: '',
//             url: 'https://www.fruityvice.com/api/fruit/all',
//         };
//     }

//     componentDidMount() {
//         this.getData();
//     }

//     getData = () => {
//         this.setState({ loading: true});

//         fetch(this.state.url)
//         .then((res) => res.json())
//         .then((res) => {
//             console.log(res)
//         })
//         .then((res) => {
//             this.setState({
//                 loading: false,
//                 fruits: res,
//             });
//         })
//         .then(console.log('----------------------', this.state.fruits))
//         .then(console.log(typeof this.state))
//         .catch((err) => {
//             console.error(err)
//         })
//     }

//     render() {
//         return (
//            <View>
//                 <View style={styles.container}>
//                     <View style={styles.productContainer}>
//                         <FlatList
//                             data={this.state.fruits}
//                             renderItem={
//                                 ({item}) => 
//                                 <View style={styles.textProduct}>
//                                     <Text style={styles.text, styles.textName}>Family: {item.family}</Text>
//                                     <Text style={styles.text, styles.textName}>Genus: {item.genus}</Text>
//                                     <Text style={styles.text, styles.textName}>Name: {item.name}</Text>
//                                     <Text style={styles.text, styles.textName}>Nutritions: {item.nutritions.calories}</Text>
//                                     <Text style={styles.text, styles.textName}>Nutritions: {item.nutritions.carbohydrates}</Text>
//                                     <Text style={styles.text, styles.textName}>Nutritions: {item.nutritions.fat}</Text>
//                                     <Text style={styles.text, styles.textName}>Nutritions: {item.nutritions.protein}</Text>
//                                     <Text style={styles.text, styles.textName}>Nutritions: {item.nutritions.sugar}</Text>
//                                 </View>
//                             }
//                         />
//                     </View>
//                 </View>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         height: "100%",
//         width: "100%",
//         flex: 1,
//         backgroundColor: "#fff",
//     },
//     productContainer: {
//         margin: 5,
//         padding: 3,
//         flexWrap: "wrap",
//         maxHeight: 100,
//         borderColor: "#1e6d65",
//         borderRadius: 5,
//         borderWidth: 2
//     },
//     logo: {
//         width: 130,
//         height: 130,
//         alignSelf: 'center',
//         marginTop: 15,
//     },
//     imgProduct: {
//         width: 130,
//         height: 100,
//         marginLeft: 5
//     },
//     image: {
//         height: '70%',
//         width: '70%'
//     }, 
//     textProduct: {},
//     textName: {
//         fontSize: 18,
//         color: "#333",
//     },
//     price: {
//         fontSize: 15,
//         color: "#111",
//     },
//     description: {},
//     button: {
//         backgroundColor: "#1e6d65",
//         margin: 10,
//         padding: 15,
//         borderRadius: 10,
//         alignItems: "center"
//     },
//     textButton: {
//         fontSize: 18,
//         color: "#fff"
//     },
// })

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
