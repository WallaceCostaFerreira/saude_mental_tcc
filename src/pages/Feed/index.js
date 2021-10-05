import React, { Component, useRef, useState } from 'react';
import { Modalize } from 'react-native-modalize';

import Feather from 'react-native-vector-icons/Feather';
import { StatusBar, ToastAndroid as Toast, ToastAndroid, } from 'react-native';

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
    ReportActionButton,

    CommentContainer,
    CommentActionView,
    CommentInput,
    CommentButton,
    CommentScroll,
    CommentTitle,
} from "./style";


import firebase,{ UsersRef } from '../../config/Firebaseconfig';

import Posts from "../../components/Post";
import Communities from "../../components/Communities";
import Comments from "../../components/Comments";
import postsDados from '../../components/Post/posts.json'

import theme from '../../constants/theme';
import commentsData from '../../components/Comments/comments.json';

export default class Feed extends Component{

    constructor(props){
        super(props);
        this.state = {
            uidUser: this.props.route.params.idUser,
            idForReport: '',
            username: '',
            reportDescription: ''
        }
    }
    commentRef = React.createRef();
    reportRef = React.createRef();

    //Monta tela de feed
    componentDidMount = () => {
        UsersRef.doc(this.state.uidUser).get().then((querySnapshot)=>{
            this.setState({username: querySnapshot.data().name})
            console.log('Sucesso ao puxar infos do usuário!');
        }).catch((error) => {
            console.log('Erro ao pegar dados usuário - '+error);
        })
    }
    
    //Abre modal de comentários
    onOpenComment = () => {
        if (this.commentRef.current) {
          this.commentRef.current.open();
        }
    }

    //Abre modal de denúncias
    onOpenReport = (idPublication) => {
        this.setState({
            idForReport: idPublication
        }, () => {
            console.log('idForReport - '+this.state.idForReport);

            if (this.reportRef.current) {
              this.reportRef.current.open();
            }

        })

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
        this.props.navigation.navigate("SavePublish",{uidUser: this.state.uidUser});
    }

    //Desloga do aplicativo
    logOut = () =>{
        firebase.auth().signOut().then(() => {
            this.props.navigation.navigate("Login");
        }).catch((error) => {

        });
    }

    //Salva publicações preferidas do usuário
    savePublication = (idPublication) => {
        UsersRef.doc(this.state.uidUser).set({
            savedPublications: firebase.firestore.FieldValue.arrayUnion(idPublication)
        },{merge:true})
        .then(() => {
            Toast.show("Sucesso ao salvar publicação!",ToastAndroid.SHORT);
        })
        .catch((error) => {
            console.log("Erro ao salvar publicação - "+error);
        })
    }

    //Salva comentários na publicação
    sendCommentPublication = (idPublication) => {

    }

    //Denunciar postagem
    sendReport = () => {
        console.log("ENVIADO DENUNCIA PARA "+this.state.idForReport+" - "+this.state.reportDescription);
        
        this.reportRef.current.close();
        Toast.show("Denúncia enviada!",ToastAndroid.SHORT);
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
                        <ProfileText>{this.state.username}</ProfileText>
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
                            onReportPropsClick={() => this.onOpenReport(post.idPublication)}
                            onCommentsPropsClick={this.onOpenComment}
                            saveText="Salvar"
                            savePublications={() => this.savePublication(post.idPublication)}
                        />
                    ))}
                </Body>

               <Modalize
                    ref={this.commentRef}
                    scrollViewProps={{ showsVerticalScrollIndicator: false }}
                    snapPoint={460}>

                    <CommentContainer>
                        <CommentActionView>
                            <CommentInput/>
                            <CommentButton>
                                <Feather
                                    name={'send'}
                                    size={18}
                                    color={theme.colors.white}
                                />
                            </CommentButton>
                        </CommentActionView>
                        <CommentScroll>
                            <CommentTitle>Comentários</CommentTitle>
                            {commentsData && commentsData.map((commentData, index) =>(
                                <Comments
                                    key={index}
                                    nameUser={commentData.nameUser}
                                    comment={commentData.comment}
                                    />
                            ))}
                        </CommentScroll>
                    </CommentContainer>

                </Modalize>

                <Modalize 
                    ref={this.reportRef}
                    scrollViewProps={{ showsVerticalScrollIndicator: false }}
                    snapPoint={360}>
                    <HeaderRepostView>
                        <ReportTextDescription>Denúncias comuns</ReportTextDescription>
                    </HeaderRepostView>
                    <ReportView>
                        <ReportButton
                            onPress={() => this.setState({reportDescription:"Postagem não condiz com a comunidade."})}>
                            <ReportText>
                                Postagem não condiz com a comunidade.
                            </ReportText>
                        </ReportButton>
                        <ReportButton
                            onPress={() => this.setState({reportDescription:"Postagem fere outros usuários."})}>
                            <ReportText>
                                Postagem fere outros usuários.
                            </ReportText>
                        </ReportButton>
                        <ReportButton
                            onPress={() => this.setState({reportDescription:"Postagem degradativa, sem ética."})}>
                            <ReportText>
                                Postagem degradativa, sem ética.
                            </ReportText>
                        </ReportButton>
                        <HeaderRepostView>
                            <ReportTextDescription>Descrição</ReportTextDescription>
                        </HeaderRepostView>
                        <ReportInputDescription
                            onChangeText={(text) => this.setState({reportDescription: text})}
                            value={this.state.reportDescription}
                            multiline={true}
                            numberOfLines={4}
                            placeholder="Descreva o motivo da denúncia"/>
                        <ReportActionButton
                            onPress={this.sendReport}>
                            <ReportText>Enviar denúncia!</ReportText>
                        </ReportActionButton>
                    </ReportView>
                </Modalize>

            </Container>
        )
    }
    
}
