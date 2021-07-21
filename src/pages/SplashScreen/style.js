import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
});

export default styles