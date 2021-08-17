import styled from 'styled-components/native';
// import { StyleSheet } from 'react-native';

export const Container = styled.View`
    flex:1;
    background: #FFFFFF;
`;

export const Header = styled.View`
    flex-direction: row;
    margin: 0px 8px;
    justify-content: space-between;
`;

export const ActionsView = styled.SafeAreaView`
    margin:8px 3px;
    background: #fff;
    flex-direction: row;
`;

export const ActionButton = styled.TouchableOpacity`
    width:30;
    height:30;
    justify-content:center;
    align-items:center;
    border-radius:15;
    background:#98FB98;
    margin-left:8;
`;

export const ProfileView = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const ProfileImg = styled.View`
    width:30;
    height:30;
    background:#98FB98;
    justify-content:center;
    align-items: center;
    border-radius:15;
`;

export const ProfileText = styled.Text`
    font-size: 12;
    color: rgba(0,0,0,0.5);
    margin-left: 10px;
`;

export const Body = styled.ScrollView`
    background: rgba(0,0,0,0.1);
    flex: 1;
`;

export const HeaderRepostView = styled.View`
    width: 90%;
    flex-direction: row;
    margin: 4px 20px;
    margin-top: 10px;
    border-bottom-width:1px;
    border-bottom-color:rgba(0,0,0,0.1);
`;

export const ReportView = styled.KeyboardAvoidingView`
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const ReportButton = styled.TouchableOpacity`
    width:90%;
    margin-top:10px;
    background-color: rgba(255,0,0,0.2);
    padding:10px;
    border-radius:5px;
`;

export const ReportText = styled.Text`
    font-size: 14;
    color:rgba(0,0,0,0.5);
`;

export const ReportTextDescription = styled.Text`
    color:rgba(0,0,0,0.5);
    font-size:16;
`;

export const ReportInputDescription = styled.TextInput`
    background-color: rgba(0,0,0,0.05);
    padding:10px;
    width: 90%;
    height: 80px;
    textAlignVertical: top;
`;

export const ReportActionButton = styled.TouchableOpacity`
    background:#98FB98;
    padding: 10px 20px;
    margin-top: 10px;
    border-radius: 20px;
`;
