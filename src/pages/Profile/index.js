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
    CommunityText
} from "./style";

import firebase from '../../config/Firebaseconfig';

import imgTest from '../../images/imgteste.jpg'

export default function Profile() {
    return (
        <Container>
            <Header>
                <ProfileImg source={imgTest}/>
            </Header>
            <Body>
                <UserInfos>
                    <TitlesText>Seus dados</TitlesText>
                    <InfosText>Nome: Wal2000Costa</InfosText>
                    <InfosText>Telefone: +55(11)91234-1234</InfosText>                    
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
            </Body>
        </Container>
    )
}
