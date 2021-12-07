import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import about from "./src/components/about";
import editProduct from "./src/components/editProduct";
import login from "./src/components/login";
import menu from "./src/components/menu";
import products from "./src/components/products";

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='Login'
                    component={ login }
                />
                <Stack.Screen 
                    name='Menu'
                    component={ menu }
                />
                <Stack.Screen 
                    name='Fruits'
                    component={ products }
                />
                <Stack.Screen 
                    name='Add Fruit'
                    component={ editProduct }
                />
                <Stack.Screen 
                    name='About'
                    component={ about }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStack;
