import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Text } from 'react-native';

import styles from "./style"
import firebase from '../../config/Firebaseconfig';

export default function SplashScreen({ navigation }){

    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [errorRegister, setErrorRegister] = useState("");
    const [msgError, setMsgError] = useState("");

    const cadastroFirebase = () =>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            navigation.navigate("RegisterPass2");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            setErrorRegister(true);
            setMsgError(errorMessage);
        });
    }

    function toLogin(){
        navigation.navigate("Login");
    }

    return(
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.title}>Criar uma conta no Saúde mental</Text>
            <TextInput 
                style={styles.input}
                type="text"
                placeholder="Enter your e-mail"
                onChangeText={(text)=>setEmail(text)}
                value={email}/>
            <TextInput 
                style={styles.input}
                type="text"
                placeholder="Enter a password"
                onChangeText={(text)=>setPassword(text)}
                value={password}
                secureTextEntry={true}
            />
            {errorRegister === true ? 
            <Text 
                style={styles.msgError}>{msgError}</Text>
            :
            <Text></Text>
            }
            <TouchableOpacity style={styles.button}>
                <Text style={styles.txtbutton}
                onPress={cadastroFirebase}>Cadastrar-se</Text>
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

