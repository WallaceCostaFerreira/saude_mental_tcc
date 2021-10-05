import styled from 'styled-components/native';
import theme from '../../constants/theme';

export const ProfileImg = styled.View`
    width:30px;
    height:30px;
    background:${theme.colors.primary};
    justify-content:center;
    align-items: center;
    border-radius:15px;
`;

export const ProfileText = styled.Text`
    font-size: 12px;
    color: ${theme.colors.textGray};
    margin-left: 10px;
`;

export const CommentView = styled.View`
    width: 300px;
    flex-direction: row;
    padding-bottom: 10px;
    border-bottom-width:1px;
    border-bottom-color:${theme.colors.lightGray};
`;

export const CommentProfileView = styled.View`
    width: 20%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
