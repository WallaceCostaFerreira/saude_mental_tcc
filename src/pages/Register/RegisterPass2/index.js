import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect } from 'react';
import { View , CheckBox, KeyboardAvoidingView, TextInput, TouchableOpacity, Text } from 'react-native';

import styles from "./style"

export default function RegisterPass2({ navigation }){

    const [isSelected, setSelection] = useState(false);

    return(
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.title}>Mais algumas informações</Text>
            <TextInput 
                style={styles.input}
                type="text"
                placeholder="Your name"/>
            <Text style={styles.subtitle}>Nossas comunidades</Text>
            {/* Será incrementado via dados do firebase */}
            <View style={styles.CommunityCheckbox}>
                <View style={styles.checkboxContainer}>
                    <CheckBox 
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}/>
                    <Text style={styles.txtCommunity}>Ansiedade</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox 
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}/>
                    <Text style={styles.txtCommunity}>Comunidade</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox 
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}/>
                    <Text style={styles.txtCommunity}>Comunidade</Text>
                </View>
            </View>
            <View style={styles.CommunityCheckbox}>
                <View style={styles.checkboxContainer}>
                    <CheckBox 
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}/>
                    <Text style={styles.txtCommunity}>Comunidade</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox 
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}/>
                    <Text style={styles.txtCommunity}>Comunidade</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox 
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}/>
                    <Text style={styles.txtCommunity}>Comunidade</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.txtbutton}>Continuar cadastro</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

