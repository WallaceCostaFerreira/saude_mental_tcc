import styled from 'styled-components/native';
import theme from '../../constants/theme';


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
    border-radius: 6;
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

export const ProfileImg = styled.View`
    width:30;
    height:30;
    background:${theme.colors.primary};
    justify-content:center;
    align-items: center;
    border-radius:15;
`;

export const ProfileText = styled.Text`
    font-size: 12;
    color: ${theme.colors.textGray};
    margin-left: 10px;
`;

export const CommentTitle = styled.Text`
    font-size: 16px;
    color: ${theme.colors.textGray};
    margin-bottom: 10px;
`;

export const CommentView = styled.View`
    width: 300px;
    flex-direction: row;
    padding-bottom: 10px;
    border-bottom-width:1px;
    border-bottom-color:${theme.colors.lightGray};
`;

export const CommentProfileView = styled.View`
    flex-direction: column;
    align-items: center;
`;

export const CommentTextView = styled.View`
    flex: 1;
    margin-left: 10px;
`;

export const CommentText = styled.Text`
    margin-right: 10px;
    font-size: 12px;
    color: ${theme.colors.textGray};
`;
