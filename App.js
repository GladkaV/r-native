import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import Home from "./components/Home";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import UsersPageNavigation from "./screens/UsersPageNavigation";

let BottomTabNavigation = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <BottomTabNavigation.Navigator>
                <BottomTabNavigation.Screen name={'UsersPageNavigation'} component={UsersPageNavigation} options={{ headerShown: false }}/>
                <BottomTabNavigation.Screen name={'Home'} component={Home} options={{ headerShown: false }}/>
            </BottomTabNavigation.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
