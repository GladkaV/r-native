import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import NotificationScreen from "../screens/NotificationScreen";

const Drawer = createDrawerNavigator();

const Home = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Notification" component={NotificationScreen}/>
        </Drawer.Navigator>
    )
}

export default Home;