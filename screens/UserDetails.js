import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UserDetails = (props) => {
    let {route: {params: {data}}, navigation} = props;

    return (
        <View>
            <Text>{data.name}</Text>
            <Text>{data.email}</Text>
        </View>
    )
}

export default UserDetails;