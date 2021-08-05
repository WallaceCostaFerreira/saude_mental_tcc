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



