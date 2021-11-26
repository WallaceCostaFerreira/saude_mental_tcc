import React, { Component, useRef, useState } from 'react';
import { Modalize } from 'react-native-modalize';

import Feather from 'react-native-vector-icons/Feather';
import { 
    StatusBar, 
    ToastAndroid as Toast, 
    ToastAndroid, 
    FlatList,
    ActivityIndicator,
    View, 
    Share
} from 'react-native';

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

    PostsViewEmptyContainer,
    PostsViewEmptyText,
    ViewLoadingContainer
} from "./style";

import firebase,{ PostsRef, UsersRef } from '../../config/Firebaseconfig';
import * as FileSystem from 'expo-file-system';

import Posts from "../../components/Post";
import Communities from "../../components/Communities";
import Comments from "../../components/Comments";

import theme from '../../constants/theme';

export default class Feed extends Component{

    constructor(props){
        super(props);
        this.state = {
            uidUser: this.props.route.params?.idUser,
            loading: true,
            idForReport: '',
            username: '',
            reportDescription: '',
            dadosPost: [],
            idPostAtual: '',
            commentAtual: '',
            commentsPost: [],
            loadData: true,
        }
    }
    commentRef = React.createRef();
    reportRef = React.createRef();

    //Monta tela de feed
    componentDidMount = () => {
        this.iniciandoColetaDados();
    }

    iniciandoColetaDados = () => {
        UsersRef.doc(this.state.uidUser).get().then((querySnapshot)=>{
            this.setState({username: querySnapshot.data().name})
            console.log('Sucesso ao puxar infos do usuário!');
            this.pegaDocumentos();
        }).catch((error) => {
            console.log('Erro ao pegar dados usuário - '+error);
        })
    }
    
    //Abre modal de comentários
    onOpenComment = (idPost) => {
        this.setState({commentsPost: ''});

        PostsRef.doc(idPost).get().then((querySnapshot) => {
            this.setState({commentsPost: querySnapshot.data().comments});
        }).catch(error => {
            console.log("Erro ao pegar comentários da publicação! ", error);
        })
        this.setState({idPostAtual: idPost});
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

    // Pega documentos da coleção Posts
    pegaDocumentos = () => {
        PostsRef.get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            this.pegaDadosPost(doc.id);
          });
        }).catch(error => {
            console.log("Erro ao pegar documentos! ", error);
        });
        
        this.setState({  loading: false })
    }

    //Pega dados de um determinado post.
    pegaDadosPost = (id) => {
        PostsRef.doc(id).get().then((querySnapshot) => {
            let dados = { 
                dados: querySnapshot.data(),
                idPost: id 
            }

            this.setState({ 
                dadosPost: this.state.dadosPost.concat(dados),
                loading: false,
                loadData:false
            })

        }).catch(error => {
            console.log("Erro ao pegar post ",id," - ",error);
        })
        this.setState({  
            loading: false,
            loadData:false 
        })
    }

    //Listagem de posts do feed
    renderItem = ({ item }) => {

        return(
            <Posts
                name={item.dados.dadosFireStore.nmUsuario}
                community={item.dados.dadosFireStore.comunidade}
                textPublish={item.dados.dadosFireStore.descricao}
                photo={item.dados.dadosFireStore.imgUsuario}
                onReportPropsClick={() => this.onOpenReport(item.idPost)}
                onCommentsPropsClick={() => this.onOpenComment(item.idPost)}
                saveText="Salvar"
                imagePost={item.dados.urlsStorage}
                savePublications={() => this.savePublication(item.idPost)}
                downloadDocs={() => this.downloadDocs(item.idPost)}
            />
        )
    }

    //Para quando a lista estiver vazia
    renderItemEmpty = (text) => {
        return (
            <PostsViewEmptyContainer>
                <PostsViewEmptyText>{text}</PostsViewEmptyText>
            </PostsViewEmptyContainer>
        )
    }

    //Lista de comentários
    renderItemComments = ({ item }) => {
        
        return (
            <Comments
                nameUser={item.user}
                comment={item.comment}
            />
        )
        
    }

    //Vai para a tela de perfil
    toProfile = () =>{
        this.props.navigation.navigate("Profile",{
            uidUser: this.state.uidUser, 
            nmUsuario: this.state.username,
            imgUsuario: 'imgUsuario'}
        );
    }

    //Vai para a tela de publicação
    toPublish = () =>{
        this.props.navigation.navigate("Publish",{
            uidUser: this.state.uidUser, 
            nmUsuario:this.state.username,
            imgUsuario: 'imgUsuario'});
    }

    //Vai para a tela de publicações salvas pelo usuário
    toSavePublish = () =>{
        this.props.navigation.navigate("SavePublish",{
            uidUser: this.state.uidUser,
            nmUsuario:this.state.username});
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
        let dados = {
            user: this.state.username,
            userUid: this.state.uidUser,
            comment: this.state.commentAtual
        }

        PostsRef.doc(idPublication).update({
            comments: firebase.firestore.FieldValue.arrayUnion(dados)
        })
        .then(() => {
            this.setState({commentAtual: ''})

            if (this.commentRef.current) {
              this.commentRef.current.close();
            }

            Toast.show("Comentário enviado com sucesso!",ToastAndroid.SHORT);
        }).catch((error) => {
            console.log("Erro ao enviar comentário - "+error);
        })
    }

    //Denunciar postagem
    sendReport = (idPublication) => {
        console.log("ENVIADO DENUNCIA PARA "+this.state.idForReport+" - "+this.state.reportDescription);

        PostsRef.doc(idPublication).update({
            reports: firebase.firestore.FieldValue.arrayUnion(this.state.reportDescription)
        })
        .then(() => {
            this.setState({reportDescription: ''})

            this.reportRef.current.close();

            Toast.show("Denúncia enviada!",ToastAndroid.SHORT);
        }).catch((error) => {
            console.log("Erro ao enviar reporte - "+error);
        })

    }

    //Baixar conteúdo do Storage para o celular
    downloadDocs = (idPublication) => {
        var storage = firebase.storage();
        PostsRef.doc(idPublication).get().then((querySnapshot) => {
            if(querySnapshot.data().urlsStorage.length <= 0){
                ToastAndroid.show("Não tem PDFs para download!",ToastAndroid.SHORT);
            }
            querySnapshot.data().urlsStorage.map(function (dado,index){
                
                if(dado.startsWith('docs/')){
                    const urlDownload = firebase.storage().ref(dado).getDownloadURL().then(function(dados) {
                        FileSystem.downloadAsync( dados, FileSystem.documentDirectory + 'small.pdf')
                        .then(({ uri }) => {
                            console.log('Download finalizado ', uri);

                            navigation.navigate('PdfScreen');
                            
                        })
                        .catch(error => {
                            console.error("Erro ao baixar PDFs - ",error);
                        });
                        console.log(dados);
                    });
                }else{
                    ToastAndroid.show("Não tem PDFs para download!",ToastAndroid.SHORT);
                }
            })

        }).catch((error) => {
            console.log("Erro ao pegar docs Storage. ",error);
        });
    }

    //Recarregar tela de feed
    reloadScreen = () => {
        this.setState({ 
            dadosPost: [],
        })

        UsersRef.doc(this.state.uidUser).get().then((querySnapshot)=>{
            this.setState({username: querySnapshot.data().name})
            console.log('Sucesso ao puxar infos do usuário!');
            this.pegaDocumentos();
        }).catch((error) => {
            console.log('Erro ao pegar dados usuário - '+error);
        })
    }

    render(){
        
        return(
            <Container>
                <StatusBar
                    animated={true}
                    backgroundColor={theme.colors.primary}
                    hidden={false} />
                
                {!this.state.loading 
                ? <> 
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
                        <FlatList
                            data={this.state.dadosPost}
                            renderItem={this.renderItem}
                            onRefresh={this.reloadScreen}
                            refreshing={this.state.loadData}
                            ListEmptyComponent={() => this.renderItemEmpty("Ainda não temos publicações! Faça uma publicação...")}
                            keyExtractor={(item, i) => { return i + "" }}
                        />
                    </Body>
                </>
                :<ViewLoadingContainer>
                    <ActivityIndicator size="large" color={theme.colors.primary}/> 
                </ViewLoadingContainer> 
                }
                

               <Modalize
                    ref={this.commentRef}
                    scrollViewProps={{ showsVerticalScrollIndicator: false }}
                    snapPoint={460}>

                    <CommentContainer>
                        <CommentActionView>
                            <CommentInput
                                value={this.state.commentAtual}
                                onChangeText={(text) => this.setState({commentAtual: text})}/>
                            <CommentButton
                                onPress={() => this.sendCommentPublication(this.state.idPostAtual)}>
                                <Feather
                                    name={'send'}
                                    size={18}
                                    color={theme.colors.white}
                                />
                            </CommentButton>
                        </CommentActionView>
                        <CommentScroll>
                            <CommentTitle>Comentários</CommentTitle>
                            <FlatList
                                data={this.state.commentsPost}
                                renderItem={this.renderItemComments}
                                ListEmptyComponent={() => this.renderItemEmpty("Seja o primeiro a fazer um comentário!")}
                                keyExtractor={(item, i) => { return i + "" }}
                            />
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
                            onPress={() => this.sendReport(this.state.idForReport)}>
                            <ReportText>Enviar denúncia!</ReportText>
                        </ReportActionButton>
                    </ReportView>
                </Modalize>

            </Container>
        )
    }
    
}
