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

