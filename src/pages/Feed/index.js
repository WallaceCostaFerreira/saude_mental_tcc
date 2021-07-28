import React, {useState, useEffect } from 'react';
import { KeyboardAvoidingView, Text, TouchableOpacity } from 'react-native';

import styles from "./style"
import firebase from '../../config/Firebaseconfig';

export default function Feed({ navigation }){

    const logOut = () =>{
        firebase.auth().signOut().then(() => {
            navigation.navigate("SplashScreen");
        }).catch((error) => {
            // An error happened.
        });
    }

    return(
        <KeyboardAvoidingView style={styles.container}>
            <Text>Saúde Mental - Feed</Text>
            <TouchableOpacity onPress={logOut}>
                <Text>Deslogar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}
