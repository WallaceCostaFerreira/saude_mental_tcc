import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView,View, Image, TextInput, TouchableOpacity, Text,StyleSheet } from 'react-native';
export default function App() {
  return (
  <KeyboardAvoidingView style={Styles.backLogin}>
    <View style={Styles.logo}>
      <Image
       source={require('./assets/meninoMenina_2.png')}
      />
    </View>
    <View style={Styles.Container}>
      <TouchableOpacity style={Styles.Submit}>
        <Text style={Styles.SubmitText}>INSCREVER-SE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.SubmitDois}>
        <Text style={Styles.SubmitTextDois}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  </KeyboardAvoidingView>
    
  );
}
const Styles = StyleSheet.create({
  backLogin:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#98FB98'

  },
  logo:{
    justifyContent: 'center',
    height:'40%',
  },
  Container:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  Submit:{
    width:'90%',
    height:45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20,
    borderWidth: 1,
    borderColor: 'white'
  },
  SubmitText:{
    fontSize:15,
    color:'#fff',
    fontWeight: "bold"
  },
  SubmitDois:{
    backgroundColor:'white',
    width:'90%',
    height:45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20,
    marginTop:'5%',
    borderColor: 'white'
  },
  SubmitTextDois:{
    fontSize:15,
    color:'#98FB98',
    fontWeight: "bold"
  }


})
