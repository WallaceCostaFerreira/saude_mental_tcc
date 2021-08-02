import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },logoutButton:{
        width:100,
        height:30,
        backgroundColor: '#FFFF00',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        borderRadius:20,
        borderColor:'#FF9933',
        borderWidth:1,
    },row:{
        width:'100%',
        flexDirection:'row',
        padding:4,
        marginBottom:10,
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#F5F5F5',
    },profileView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end'
    },publishRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },tinyImg:{
        width:26,
        height:26,
        backgroundColor:'#98FB98',
        borderRadius:13,
        marginRight:10,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
    },publishInput:{
        borderWidth:1,
        fontSize:10,
        height:26,
        width:130,
        paddingLeft:10,
        borderTopLeftRadius:13,
        borderBottomLeftRadius:13,
        borderColor:'#98FB98',
    },publishButton:{
        width:30,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        backgroundColor:'#98FB98',
        marginLeft:8,
    },txtNameProfile:{
        fontSize:14,
        color:'#C0C0C0'
    }
});

export default styles