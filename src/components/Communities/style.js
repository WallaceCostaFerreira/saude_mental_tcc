import styled from "styled-components/native";

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

export const CommunityButton = styled.TouchableOpacity`
    height: 20px;
    width: 100px;
    background: #fff;
    border-color: #98FB98;
    border-width: 1px;
    border-radius: 25px;
    margin-bottom: 3px;
    align-items: center;
`;