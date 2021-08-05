import React, {useState, useEffect } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { View, Text, TouchableOpacity, StatusBar, Image, TextInput } from 'react-native';

import styles from "./style"
import firebase from '../../config/Firebaseconfig';

export default function Feed({ navigation }){

    const logOut = () =>{
        firebase.auth().signOut().then(() => {
            navigation.navigate("Login");
        }).catch((error) => {
            // An error happened.
        });
    }

    return(
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#98FB98"
                hidden={false} />
            <View style={styles.row}>
                <View style={styles.profileView}>
                    <View style={styles.tinyImg}>
                        <Feather
                            name={'user'}
                            color={'#000000'}
                        />
                    </View>
                    <Text style={styles.txtNameProfile}>Wallace Costa</Text>
                </View>
                <View style={styles.publishRow}>
                    <TouchableOpacity
                        style={styles.publishButton}>
                        <Feather
                            name={'plus'}
                            size={18}
                            color={'#fff'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.publishButton}>
                        <Feather
                            name={'settings'}
                            size={18}
                            color={'#fff'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.publishButton}
                        onPress={logOut}>
                        <Feather
                            name={'log-out'}
                            size={18}
                            color={'#fff'}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            {/* <Text>Saúde Mental - Feed</Text>
            <TextInput
                style={styles.publishInput}
                type="text"
                placeholder="Publish here"
            />
            <TouchableOpacity 
                style={styles.logoutButton}
                onPress={logOut}>
                <Text>Deslogar</Text>
            </TouchableOpacity> */}
        </View>
    )
}
