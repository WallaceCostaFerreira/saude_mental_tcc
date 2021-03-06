import styled from "styled-components/native";
import theme from "../../constants/theme";

export const FeedContainer = styled.View`
    background: ${theme.colors.white};
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

export const ProfileView = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

// export const ProfileImg = styled.Image`
//     width:30px;
//     height:30px;
//     background:${theme.colors.primary};
//     justify-content:center;
//     align-items: center;
//     border-radius:15px;
// `;

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
    margin-bottom: 10px;
    color: ${theme.colors.textGray};
`;

export const CarrouselView = styled.ScrollView.attrs({
})`
    width: 100%;
    flex-direction: row;
    margin-bottom: 10px;
`;

export const PostImage = styled.Image`
    margin-right: 10px;
    width: 240px;
    height: 240px;
    border-radius: 10px;
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