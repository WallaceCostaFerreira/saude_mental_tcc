import React, { useRef } from 'react';
import { Modalize } from 'react-native-modalize';

import Feather from 'react-native-vector-icons/Feather';
import { StatusBar } from 'react-native';

import { 
    ActionsView, 
    ActionButton, 
    Container, 
    ProfileImg,
    ProfileView, 
    ProfileText, 
    Header, 
    Body,
    HeaderRepostView,
    ReportView,
    ReportButton,
    ReportText,
    ReportTextDescription,
    ReportInputDescription,
    ReportActionButton } from "./style";



import Posts from "../../components/Post";
import Communities from "../../components/Communities";
import Comments from "../../components/Comments";
import firebase from '../../config/Firebaseconfig';

import postsDados from '../../components/Post/posts.json'

export default function Feed({ navigation }){

    const denunciaRef = useRef(null);
    const commentRef = useRef(null);

    const onOpenDenuncia = () => {
        denunciaRef.current?.open();
    };

    const onOpenComment = () => {
        commentRef.current?.open();
    };

    const toProfile = () =>{
        navigation.navigate("Profile");
    }

    const logOut = () =>{
        firebase.auth().signOut().then(() => {
            navigation.navigate("Login");
        }).catch((error) => {
            // An error happened.
        });
    }

    return(
        <Container>
            <StatusBar
                animated={true}
                backgroundColor="#98FB98"
                hidden={false} />
            <Header>
                <ProfileView onPress={toProfile}>
                    <ProfileImg>
                        <Feather
                            name={'user'}
                            size={18}
                            color={'#fff'}
                        />
                    </ProfileImg>
                    <ProfileText>Wallace Costa</ProfileText>
                </ProfileView>
                <ActionsView>
                    <ActionButton>
                        <Feather
                            name={'plus'}
                            size={18}
                            color={'#fff'}
                        />
                    </ActionButton>
                    <ActionButton>
                        <Feather
                            name={'settings'}
                            size={18}
                            color={'#fff'}
                        />
                    </ActionButton>
                    <ActionButton 
                        onPress={logOut}>
                        <Feather
                            name={'log-out'}
                            size={18}
                            color={'#fff'}
                        />
                    </ActionButton>
                </ActionsView>
            </Header>
            <Body showsVerticalScrollIndicator={false}>
                <Communities/>
                {postsDados && postsDados.map((post,index) =>(
                    <Posts  name={post.name}
                            community={post.community}
                            textPublish={post.textPublish}
                            photo={post.photo}
                            onEventPropsClick={onOpenDenuncia.bind(this)}
                            onCommentsPropsClick={onOpenComment.bind(this)}
                    />
                ))}
            </Body>

            <Modalize 
                ref={denunciaRef}
                scrollViewProps={{ showsVerticalScrollIndicator: false }}
                snapPoint={360}>
                <HeaderRepostView>
                    <ReportTextDescription>Denúncias comuns</ReportTextDescription>
                </HeaderRepostView>
                <ReportView>
                    <ReportButton>
                        <ReportText>
                            Postagem não condiz com a comunidade.
                        </ReportText>
                    </ReportButton>
                    <ReportButton>
                        <ReportText>
                            Postagem fere outros usuários.
                        </ReportText>
                    </ReportButton>
                    <ReportButton>
                        <ReportText>
                            Postagem degradativa, sem ética.
                        </ReportText>
                    </ReportButton>
                    <HeaderRepostView>
                        <ReportTextDescription>Descrição</ReportTextDescription>
                    </HeaderRepostView>
                    <ReportInputDescription
                        multiline={true}
                        numberOfLines={4}
                        placeholder="Descreva o motivo da denúncia"/>
                    <ReportActionButton>
                        <ReportText>Enviar denúncia!</ReportText>
                    </ReportActionButton>
                </ReportView>
            </Modalize>
            <Modalize
                ref={commentRef}
                scrollViewProps={{ showsVerticalScrollIndicator: false }}
                snapPoint={460}>
                <Comments/>
            </Modalize>
        </Container>
    )
}
