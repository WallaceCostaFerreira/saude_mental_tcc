import styled from "styled-components/native";
import theme from "../../constants/theme";

export const Container = styled.View`
    flex:1;
    background: ${theme.colors.white};
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: ${theme.colors.primary};
`;

export const ActionButton = styled.TouchableOpacity`
    padding:8px;
`;

export const Title = styled.Text`
    color: ${theme.colors.white};
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
`;


export const Body = styled.View`
    flex:1;
    background: ${theme.colors.lightGray};
`;

export const CommunityView = styled.View`
    padding-top:6px;
    padding-left:10px;
    padding-right:10px;
    background: ${theme.colors.white};
    margin-bottom: 6px;
`;

export const Subtitle = styled.Text`
    color:${theme.colors.textGray};
`;

export const PickerCommunity = styled.Picker`

`;

export const PostsView = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})``;

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
    font-size: 14px;
    color:${theme.colors.textGray};
`;

export const ReportTextDescription = styled.Text`
    color:${theme.colors.textGray};
    font-size:16px;
`;

export const ReportInputDescription = styled.TextInput`
    background-color: ${theme.colors.lightGray};
    padding:10px;
    width: 90%;
    height: 80px;
    textAlignVertical: top;
`;

export const ReportActionButton = styled.TouchableOpacity`
    background:${theme.colors.primary};
    padding: 10px 20px;
    margin-top: 10px;
    border-radius: 20px;
`;
