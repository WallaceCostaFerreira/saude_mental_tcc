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

export const CommunityView = styled.View`
    margin: 5px 0px;
    height: auto;
    background: #fff;
    flex-direction: column;
    justify-content: space-between;
`;

export const CommunityHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-right:8px;
`;

export const CommunityText = styled.Text`
    font-weight: 400;
    color: rgba(0,0,0,0.4);
    font-size: 10px;
    margin: 3px 8px;
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

export const FeedContainer = styled.View`
    background: #fff;
`;

export const PostView = styled.View`
    padding: 10px;
    flex-direction: column;
`;

export const PostHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom-width: 0.5px;
    border-bottom-color: rgba(0,0,0,0.1);
`;

export const PostCommunityText = styled.Text`
    font-size: 12px;
    font-weight: 500;
    color:#65A665;
    text-transform: uppercase;
`;

export const PostBody = styled.View`
    margin-top:10px;
`;

export const PostText = styled.Text`
    font-size: 10px;
    margin-bottom: 3px;
    color: rgba(0,0,0,0.8);
`;

export const PostImage = styled.Image`
    width: 100%;
    height: 120px;
`;

export const PostActions = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1px;
    border-top-width: 0.5px;
    border-top-color: rgba(0,0,0,0.1);
`;

export const PostButton = styled.TouchableOpacity`
    margin-top: 6px;
    flex-direction: row;
    align-items: center;
`;

export const PostActionText = styled.Text`
    font-size: 12px;
    font-weight: 500;
`;