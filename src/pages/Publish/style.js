import styled from "styled-components/native";

import theme from "../../constants/theme";

export const Container = styled.ScrollView`
    background:${theme.colors.white};
`; 

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    background: ${theme.colors.primary};
    align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
    padding: 8px;
    margin-left: 10px;
    margin-right: 10px;
`;


export const Title = styled.Text`
    font-size: 16px;
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-weight: bold;
`;

export const Body = styled.View`
    flex:1;
    align-items: center;
`;

export const Subtitle = styled.Text`
    color: ${theme.colors.textGray};
    margin-top: 10px;
    margin-left: 10px;
`;

export const PickerCommunity = styled.Picker`
    width: 90%;
    margin: 1px 10px;
`;

export const TextPublish = styled.TextInput.attrs({
    multiline: true,
    placeholder: "Escreva algo sobre a publicação..."
})`
    width: 90%;
    height: 150px;
    padding: 10px;
    background: rgba(0,0,0,0.05);
    border-radius: 10px;
    margin-bottom:10px;
    textAlignVertical: top;
`;

export const ActionView = styled.View`
    width: 90%;
    flex-direction: row;
    justify-content: space-between;
`;

export const AttachmentButton = styled.TouchableOpacity`
    width: 48%;
    background-color: ${theme.colors.blue};
    padding: 8px 10px;
    border-radius: 10px;
`;

export const AttachmentView = styled.View`
    flex-direction: row;
    justify-content: space-between;

`;

export const AttachmentText = styled.Text`
    text-transform: uppercase;
    color:${theme.colors.white};
    margin-right: 15px;
    font-weight: 700;
    font-size: 16px;
`;

export const SendButton = styled.TouchableOpacity`
    width: 48%;
    background-color: ${theme.colors.primary};
    padding: 8px 10px;
    border-radius: 10px;
`;

export const SendView = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const SendText = styled.Text`
    text-transform: uppercase;
    color:${theme.colors.white};
    margin-left: 15px;
    font-weight: 700;
    font-size: 16px;
`;

export const AttachmentOptionsContainer = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const AttachmentOptionButton = styled.TouchableOpacity`
    flex-direction:row;
    width: 100%;
    justify-content: space-between;
    margin: 10px 10px;
    padding: 8px 15px;
`;

export const AttachmentOptionText = styled.Text`
    font-size: 18px;
    color: ${theme.colors.textGray};
    text-transform: uppercase;
`;

export const ViewLine = styled.View`
    width: 90%;
    border-width: 1px;
    border-color: ${theme.colors.lightGray};
`;



