import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect } from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Text } from 'react-native';

import styles from "./style"

export default function SplashScreen({ navigation }){

    function toRegister(){
        navigation.navigate("Register");
    }

    return(
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.title}>Saúde Mental</Text>
            <TextInput 
                style={styles.input}
                type="text"
                placeholder="Enter your e-mail"/>
            <TextInput 
                style={styles.input}
                type="text"
                placeholder="Enter a password"
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.txtbutton}>Logar</Text>
            </TouchableOpacity>
            <Text style={styles.txtCadastrar}>Não tenho cadastro, 
                <Text 
                    style={styles.txtlink}
                    onPress={toRegister}> cadastrar-se!
                </Text>
            </Text>
        </KeyboardAvoidingView>
    )
}

