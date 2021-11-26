import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { 
    ActivityIndicator ,
    KeyboardAvoidingView, 
    TextInput, 
    TouchableOpacity, 
    Text 
} from 'react-native';
import { getAuth } from "firebase/auth";

import styles from "./style"
import firebase from '../../config/Firebaseconfig';


export default class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            errorLogin: false,
            msgError: '',
            loading: false
        }
    }


    //Faz login no firebase
    loginFirebase = () =>{
        this.setState({loading:true});
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            this.setState({loading:false});
            this.props.navigation.navigate("Feed", {idUser: user.uid});
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            this.setState({
                errorLogin: true,
                msgError: errorMessage,
                loading:false
            });
        });
    }

    //Método que roda na montagem da tela
    componentDidMount (){
        this.setState({loading:true});
        var unsubscribe = firebase.auth().onAuthStateChanged((user) =>{
            if (user) {
                this.setState({loading:false});
                this.props.navigation.navigate("Feed",{idUser:user.uid});
                console.log('LOGADO');
            }else{
                this.setState({loading:false});
                console.log('NAO LOGADO');
        
                unsubscribe();
            }

        });
    }

    //Vai para a tela de registro
    toRegister = () => {
        this.props.navigation.navigate("Register");
    }

    
    render(){
        return(
            <KeyboardAvoidingView style={styles.container}>
                
                <Text style={styles.title}>Saúde Mental</Text>
                <TextInput 
                    style={styles.input}
                    type="text"
                    placeholder="E-mail"
                    value={this.state.email}
                    onChangeText={(text)=>this.setState({email: text})}/>
                <TextInput 
                    style={styles.input}
                    type="text"
                    placeholder="Senha"
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={(text)=>this.setState({password: text})}
                />
                {this.state.errorLogin && <Text style={styles.msgError}>{this.state.msgError}</Text> }
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => this.loginFirebase()}>
                    {this.state.loading 
                    ? <ActivityIndicator size="small" color="#fff"/> 
                    : <Text style={styles.txtbutton}>Entrar</Text>}
                    
                </TouchableOpacity>
                <Text style={styles.txtCadastrar}>Não tenho cadastro, 
                    <Text 
                        style={styles.txtlink}
                        onPress={() => this.toRegister()}> cadastrar-se!
                    </Text>
                </Text>
            </KeyboardAvoidingView>
        )
    }
}

