import React from "react";
import {StyleSheet} from "react-native";
import {View, Text} from "react-native";

const User = ({item}) => {
    return (
        <View style={styles.user}>
            <Text>{item.id} - {item.name}</Text>
        </View>
    );
};
export default User;

let styles = StyleSheet.create({
    user: {
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000',
        marginBottom: 10,
    }
});
