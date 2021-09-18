import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {getUsers} from "../service/getUsers";
import User from "./User";

const Users = (props) => {
    let {navigation} = props;
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, [])

    return (
        <View>
            <FlatList
                data={users}
                renderItem={({item}) => <User item={item} nav={navigation}/>}
                keyExtractor={item => '' + item.id}
            />
        </View>
    )
}

export default Users;