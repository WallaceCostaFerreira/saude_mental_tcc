import styled from 'styled-components/native';
import theme from '../../constants/theme';

export const Container = styled.View`
    flex:1;
    background: ${theme.colors.white};
`;

export const Header = styled.View`
    height: 70px;
    background: ${theme.colors.primary};
    align-items: center;
    margin-bottom: 50px;
`;

// export const ProfileImg = styled.Image`
//     width: 80px;
//     height: 80px;
//     border-radius: 50px;
//     margin-top: 30px;
// `;

export const ProfileImg = styled.View`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    margin-top: 30px;

    background:${theme.colors.primaryDark};
    justify-content:center;
    align-items: center;
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
    background: ${theme.colors.white};
    border-color: ${theme.colors.primary};
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

export const PostsContainer = styled.View`
    align-items: center;
    margin-top: 10px;
`;

export const PostsViewEmptyContainer = styled.View`
    width: 100%;
    height: 100%;
    margin-top:5px;
    justify-content: center;
    align-items: center;
`;

export const PostsViewEmptyText = styled.Text`
    color: #000;
    
`;


export const CommentContainer = styled.View`
    flex:1;
`;

export const CommentActionView = styled.View`
    flex-direction: row;
    align-items: center;
    padding-right: 10px;
    padding-left: 10px;
    justify-content: space-between;
    height: 50px;
`;

export const CommentInput = styled.TextInput`
    width: 85%;
    height: 35px;
    background: ${theme.colors.lightGray};
    margin-top: 8px;
    padding-left: 8px;
    border-radius: 6px;
`;

export const CommentButton = styled.TouchableOpacity`
    width: 36px;
    height: 36px;
    border-radius: 17px;
    margin-top: 8px;
    background: ${theme.colors.primary};
    align-items: center;
    justify-content: center;
`;

export const CommentScroll = styled.ScrollView`
    flex-direction: row;
    border-top-width: 1px;
    border-top-color: rgba(0,0,0,0.1);
    padding-top:10px;
    margin: 10px;
    height: 80%;
`;


export const CommentTitle = styled.Text`
    font-size: 16px;
    color: ${theme.colors.textGray};
    margin-bottom: 10px;
`;