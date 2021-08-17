import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect } from 'react';
import { ActivityIndicator ,KeyboardAvoidingView, TextInput, TouchableOpacity, Text } from 'react-native';

import styles from "./style"
import firebase from '../../config/Firebaseconfig';

export default function Login({ navigation }){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");
    const [msgError, setMsgError] = useState("");
    const [loading, setLoading] = useState(false);

    const loginFirebase = () =>{
        setLoading(true);
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            setLoading(false);
            navigation.navigate("Feed");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            setErrorLogin(true);
            setMsgError(errorMessage);
            setLoading(false);
        });
    }

    useEffect(()=>{
        setLoading(true);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setLoading(false);
                navigation.navigate("Feed",{idUser:user.uid});
            }else{
                setLoading(false);
            }
        });
    },[])

    function toRegister(){
        navigation.navigate("Register");
    }

    

    return(
        <KeyboardAvoidingView style={styles.container}>
            
            <Text style={styles.title}>Saúde Mental</Text>
            <TextInput 
                style={styles.input}
                type="text"
                placeholder="Enter your e-mail"
                value={email}
                onChangeText={(text)=>setEmail(text)}/>
            <TextInput 
                style={styles.input}
                type="text"
                placeholder="Enter a password"
                secureTextEntry={true}
                value={password}
                onChangeText={(text)=>setPassword(text)}
            />
            {errorLogin === true ? 
            <Text 
                style={styles.msgError}>{msgError}</Text>
                
            :
            <Text></Text>
            }
            <TouchableOpacity 
                style={styles.button}
                onPress={loginFirebase}>
                {loading 
                ? <ActivityIndicator size="small" color="#fff"/> 
                : <Text style={styles.txtbutton}>Logar</Text>}
                
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

