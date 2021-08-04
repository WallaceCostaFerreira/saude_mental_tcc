import styled from 'styled-components/native';
// import { StyleSheet } from 'react-native';

export const Container = styled.View`
    flex:1;
    background: #FFFFFF;
`;

export const Header = styled.View`
    height: 70px;
    background: #98FB98;
    align-items: center;
    margin-bottom: 50px;
`;

export const ProfileImg = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    margin-top: 30px;
`;

export const Body = styled.View`
    flex: 1;
    flex-direction: column;
`;

export const TitlesText = styled.Text`
    font-size: 18px;
    color: rgba(0,0,0,0.3);
`;

export const UserInfos = styled.View`
    align-items: center;
    margin-bottom: 10px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0,0,0,0.2);
    padding-bottom: 10px;
`;

export const InfosText = styled.Text`
    font-size: 12px;
    margin-right: 5px;
`;

export const CommunityView = styled.View`
    flex-direction: column;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0,0,0,0.2);
    padding-bottom: 10px;
`;

export const CommunityBody = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 5px;
    flex-wrap: wrap;
`;

export const Communities = styled.TouchableOpacity`
    height: 20px;
    width: 100px;
    background: #fff;
    border-color: #98FB98;
    border-width: 1px;
    border-radius: 25px;
    margin-bottom: 3px;
    align-items: center;
`;

export const CommunityText = styled.Text`
    font-weight: 400;
    color: rgba(0,0,0,0.4);
    font-size: 10px;
    margin: 3px 8px;
`;
