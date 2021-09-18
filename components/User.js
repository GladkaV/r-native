import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const User = (props) => {
    let {item, nav: {navigate}} = props;
    let onPress = () => {
        navigate('UserDetails', {data: item});
    }

    return (
        <View>
            <Text>{item.id} - {item.name}</Text>
            <Button title={'details'} onPress={onPress}/>
        </View>
    )
}

export default User;