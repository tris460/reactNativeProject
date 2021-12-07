import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import about from "./src/components/about";
import editProduct from "./src/components/editProduct";
import login from "./src/components/login";
import menu from "./src/components/menu";
import products from "./src/components/products";

const Stack = createNativeStackNavigator();

// Create a function to define the paths to other components
const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* Screen to navigate to the login  */}
                <Stack.Screen 
                    name='Login'
                    component={ login }
                />
                {/* Screen to navigate to the main menu  */}
                <Stack.Screen 
                    name='Menu'
                    component={ menu }
                />
                {/* Screen to go to products, where the fruits are shown */}
                <Stack.Screen 
                    name='Fruits'
                    component={ products }
                />
                {/* Screen for add a fruit */}
                <Stack.Screen 
                    name='Add Fruit'
                    component={ editProduct }
                />
                {/* Screen of information of who did the app  */}
                <Stack.Screen 
                    name='About'
                    component={ about }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStack;
