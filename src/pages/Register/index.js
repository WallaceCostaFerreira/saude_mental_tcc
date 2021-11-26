import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, TextInput, TouchableOpacity, Text } from 'react-native';

import styles from "./style"
import firebase from '../../config/Firebaseconfig';

export default class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            errorRegister: '',
            msgError:'',
            loading: false
        }
    }

    //Faz o cadastro do usuário no autentication do Firebase
    cadastroFirebase = () =>{
        this.setState({loading: true});
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            this.setState({loagind: false});
            this.props.navigation.navigate("RegisterPass2", {uid: user.uid});
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            this.setState({errorRegister: true});
            this.setState({errorMessage});
            this.setState({loading: false});
        });
    }

    //Vai para a tela de login
    toLogin = () => {
        this.props.navigation.navigate("Login");
    }

    render(){
        return(
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.title}>Criar uma conta no Saúde mental</Text>
                <TextInput 
                    style={styles.input}
                    type="text"
                    placeholder="E-mail"
                    onChangeText={(text)=>this.setState({email: text})}
                    value={this.state.email}/>
                <TextInput 
                    style={styles.input}
                    type="text"
                    placeholder="Senha"
                    onChangeText={(text)=>this.setState({password: text})}
                    value={this.state.password}
                    secureTextEntry={true}
                />
                {this.state.errorRegister === true ? 
                <Text 
                    style={styles.msgError}>{this.state.msgError}</Text>
                :
                <Text></Text>
                }
                <TouchableOpacity style={styles.button}>
                    {this.state.loading ? <ActivityIndicator size="small" color="#fff"/>
                    : <Text style={styles.txtbutton} onPress={() => this.cadastroFirebase()}>Cadastrar-se</Text> }

                </TouchableOpacity>
                <Text style={styles.txtCadastrar}>Já tenho cadastro, 
                    <Text 
                        style={styles.txtlink}
                        onPress={() => this.toLogin()}> Entrar!
                    </Text>
                </Text>
            </KeyboardAvoidingView>
        )
    }
}

