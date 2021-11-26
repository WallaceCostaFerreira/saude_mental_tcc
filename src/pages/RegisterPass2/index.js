import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import firebase, { ConfigurationsRef, UsersRef } from '../../config/Firebaseconfig';

import { 
    View , 
    CheckBox, 
    KeyboardAvoidingView, 
    TextInput, 
    TouchableOpacity, 
    Text,
    ActivityIndicator
} from 'react-native';

import styles from "./style"

export default class RegisterPass2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            uid: this.props.route.params.uid,
            isSelected: [],
            Communities: [],
            name: '',
            loading: false,
            dados: [],
        }
    }

    //Puxa comunidados do firebase para montar seleção
    componentDidMount(){
        this.setState({loading:true})

        let comunidades = []
        ConfigurationsRef.get().then((querySnapshot) => {
            
            querySnapshot.forEach((doc) => {
                comunidades.push(doc.data())
            });

            this.setState({ Communities : comunidades})

            this.state.Communities.forEach((dado,index)=>{
                this.setState(state => ({
                    isSelected: state.isSelected.concat(false)
                }))
            })

            this.setState({loading:false})
        }).catch((error) => {
            console.log("Erro ao pegar documento:", error);

            this.setState({loading:false})
        });
    }

    //Armazena as comunidades selecionadas pelo usuário
    separaComunidades(estado, index){
        this.setState({...this.state.isSelected[this.state.isSelected[index] = estado]})
    }

    //Envia dados do cadastro do usuário para o FireStore
    finalizarCadastro(){

        UsersRef.doc(this.state.uid).set({
            name: this.state.name,
            communities: this.state.isSelected
        })
        .then(() => {
            console.log("Dados do usuários salvo!");
            this.props.navigation.navigate("Feed",{idUser: this.state.uid});
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }

    render(){
        return(
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.title}>Mais algumas informações</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={(text) => this.setState({name:text})}
                    value={this.state.name}
                    type="text"
                    placeholder="Seu nome"/>
                <Text style={styles.subtitle}>Nossas comunidades</Text>

                <View style={styles.CommunityCheckbox}>
                    
                    {this.state.Communities && this.state.Communities.map((dados,index) =>(
                        
                        <View 
                            key={index}
                            style={styles.checkboxContainer}>
                            <Text style={styles.txtCommunity}>{dados.name}</Text>
                        </View>

                    ))}
                    
                </View>
                <TouchableOpacity style={styles.button}>
                    {this.state.loading 
                    ? <ActivityIndicator size="small" color="#fff"/> 
                    : <Text style={styles.txtbutton}
                        onPress={() => this.finalizarCadastro()}>Continuar cadastro</Text>}
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

