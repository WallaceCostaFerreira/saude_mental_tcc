import React, { Component, useRef,useState } from 'react';
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
    ReportActionButton 
} from "./style";


import firebase from '../../config/Firebaseconfig';

import Posts from "../../components/Post";
import Communities from "../../components/Communities";
import Comments from "../../components/Comments";
import postsDados from '../../components/Post/posts.json'

import theme from '../../constants/theme';


const onOpenDenuncia = () => {
    const denunciaRef = useRef<Modalize>(null);
    
    return <Modalize 
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
            </Modalize>;
};

const onOpenComment = () => {
    
    const commentRef = useRef<Modalize>(null);

    commentRef.current?.open()

    return <Modalize
        ref={commentRef}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        snapPoint={460}>
        <Comments/>
    </Modalize>
}

export default class Feed extends Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }

    //Vai para a tela de perfil
    toProfile = () =>{
        this.props.navigation.navigate("Profile");
    }

    //Vai para a tela de publicação
    toPublish = () =>{
        this.props.navigation.navigate("Publish");
    }

    //Vai para a tela de publicações salvas pelo usuário
    toSavePublish = () =>{
        this.props.navigation.navigate("SavePublish");
    }

    //Desloga do aplicativo
    logOut = () =>{
        firebase.auth().signOut().then(() => {
            this.props.navigation.navigate("Login");
        }).catch((error) => {

        });
    }

    render(){
        
        return(
            <Container>
                <StatusBar
                    animated={true}
                    backgroundColor={theme.colors.primary}
                    hidden={false} />
                <Header>
                    <ProfileView onPress={this.toProfile}>
                        <ProfileImg>
                            <Feather
                                name={'user'}
                                size={18}
                                color={theme.colors.white}
                            />
                        </ProfileImg>
                        <ProfileText>Wallace Costa</ProfileText>
                    </ProfileView>
                    <ActionsView>
                        <ActionButton
                            onPress={this.toPublish}>
                            <Feather
                                name={'plus'}
                                size={18}
                                color={theme.colors.white}
                            />
                        </ActionButton>
                        <ActionButton 
                            onPress={this.toSavePublish}>
                            <Feather
                                name={'bookmark'}
                                size={18}
                                color={theme.colors.white}
                            />
                        </ActionButton>
                        <ActionButton 
                            onPress={this.logOut}>
                            <Feather
                                name={'log-out'}
                                size={18}
                                color={theme.colors.white}
                            />
                        </ActionButton>
                    </ActionsView>
                </Header>
                <Body showsVerticalScrollIndicator={false}>
                    <Communities/>
                    {postsDados && postsDados.map((post,index) =>(
                        <Posts  
                            key={index}
                            name={post.name}
                            community={post.community}
                            textPublish={post.textPublish}
                            photo={post.photo}
                            onReportPropsClick={onOpenDenuncia.bind(this)}
                            onCommentsPropsClick={onOpenComment.bind(this)}
                        />
                    ))}
                </Body>
            </Container>
        )
    }
    
}
