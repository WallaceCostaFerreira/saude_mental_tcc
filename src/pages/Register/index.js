import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Text } from 'react-native';

import styles from "./style"

export default function SplashScreen({ navigation }){

    function toLogin(){
        navigation.navigate("Login");
    }

    return(
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.title}>Saúde Mental</Text>
            <TextInput 
                style={styles.input}
                type="text"
                placeholder="Name"/>
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
            <TextInput 
                style={styles.input}
                type="text"
                placeholder="Confirm a password"
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.txtbutton}>Cadastrar-se</Text>
            </TouchableOpacity>
            <Text style={styles.txtCadastrar}>Já tenho cadastro, 
                <Text 
                    style={styles.txtlink}
                    onPress={toLogin}> logar-se!
                </Text>
            </Text>
        </KeyboardAvoidingView>
    )
}

