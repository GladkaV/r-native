import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Users from "../components/Users";
import UserDetails from "./UserDetails";

let StackNavigator = createStackNavigator();

const UsersPageNavigation = () => {

    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen name={'Users'} component={Users} />
            <StackNavigator.Screen name={'UserDetails'} component={UserDetails}/>
        </StackNavigator.Navigator>
    )
}

export default UsersPageNavigation;