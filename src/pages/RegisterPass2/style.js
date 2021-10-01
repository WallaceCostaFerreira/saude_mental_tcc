import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },title:{
        color:'#98FB98',
        fontSize: 22,
        marginBottom: 20,
        textAlign: 'center',
    },subtitle:{
        color:'#ABABAB',
        fontSize: 14,
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
    },input:{
        width:'80%',
        height: 40,
        backgroundColor: '#FFFCFC',
        padding:10,
        borderBottomWidth:2,
        borderColor:'#98FB98',
        marginTop:8,
    },button:{
        width:'50%',
        height:40,
        backgroundColor:'#98FB98',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20,
        borderRadius:20,
    },txtbutton:{
        color:'#FFFFFF'
    },txtCadastrar:{
        fontSize:10,
        color:'#ABABAB',
        marginTop:10,
    },txtlink:{
        color:'#7E62FC',
    },CommunityCheckbox:{
        width: '100%',
        padding: 10,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:8,
        flexWrap:'wrap',
    },checkboxContainer:{
        flexDirection: "row",
        marginLeft:8,
        marginRight:8,
        alignItems: "center",
        justifyContent: 'flex-end'
    },checkbox:{
    }, txtCommunity:{
        fontSize:14,
        color:'#ABABAB',
        margin: 5,
    }
});

export default styles