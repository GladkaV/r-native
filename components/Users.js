import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet} from "react-native";
import {View, Text} from "react-native";
import {getUsers} from "../services/getUsers";
import User from "./User";

const Users = () => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, [])

    return (
        <View>
            <Text style={[styles.usersTitle]}>Users page</Text>
            <FlatList
                data={users}
                renderItem={({item}) => <User item={item}/>}
                keyExtractor={item => '' + item.id}
            />
        </View>
    );
};
export default Users;
let styles = StyleSheet.create({
    usersTitle: {
        marginBottom: 20,
        fontWeight: 700,
        textAlign: 'center',
    }
});