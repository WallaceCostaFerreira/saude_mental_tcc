import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect } from 'react';
import { SafeAreaView,KeyboardAvoidingView,View, Image, TextInput, TouchableOpacity, Text } from 'react-native';

import styles from "./style"

export default function SplashScreen({ navigation }){

    function toLogin(){
        navigation.navigate("Login");
    }

    function toRegister(){
        navigation.navigate("Register");
    }

    return(
        <KeyboardAvoidingView style={styles.backLogin}>
        <View style={styles.logo}>
          <Image
           source={require('../../../assets/meninoMenina_2.png')}
          />
        </View>
        <View style={styles.Container}>
          <TouchableOpacity 
          style={styles.Submit}
          onPress={toRegister}>
            <Text style={styles.SubmitText}>INSCREVER-SE</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.SubmitDois}
          onPress={toLogin}>
            <Text style={styles.SubmitTextDois}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
}

