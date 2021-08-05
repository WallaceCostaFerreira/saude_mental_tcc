import React from 'react';
import { StatusBar , Text } from 'react-native';

import { 
    Container,
    Header,
    ProfileImg,
    Body,
    TitlesText,
    UserInfos,
    InfosText,
    CommunityView,
    CommunityBody,
    Communities,
    CommunityText,
} from "./style";

import Posts from "../../components/Post";

import imgTest from "../../../assets/imgteste.jpg"

export default function Profile() {
    return (
        <Container showsVerticalScrollIndicator={false}>
            <Header>
                <ProfileImg source={imgTest}/>
            </Header>
            <Body>
                <UserInfos>
                    <TitlesText>Wallace Costa Ferreira</TitlesText>
                    <InfosText>+55(11)91234-1234</InfosText>                    
                </UserInfos>
                <CommunityView>
                    <TitlesText>Comunidades</TitlesText>
                    <CommunityBody>
                        <Communities>
                            <CommunityText>Depressão</CommunityText>
                        </Communities>
                        <Communities>
                            <CommunityText>Ansiedade</CommunityText>
                        </Communities>
                        <Communities>
                            <CommunityText>TDAH</CommunityText>
                        </Communities>
                        <Communities>
                            <CommunityText>Teste</CommunityText>
                        </Communities>
                    </CommunityBody>
                </CommunityView>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
            </Body>
        </Container>
    )
}
