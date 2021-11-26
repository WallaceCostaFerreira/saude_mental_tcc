import React,{ Component, useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { Modalize } from 'react-native-modalize';
import {
    FlatList,
    ToastAndroid as Toast
} from 'react-native';

import {
    Container,
    Header,
    ActionButton,
    Title,
    Body,
    CommunityView,
    Subtitle,
    PickerCommunity,
    PostsView,
    PostsViewEmptyContainer,
    PostsViewEmptyText,

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
    CommentTitle

} from './styles';

import Comments from "../../components/Comments";

import Posts from '../../components/Post';

import firebase,{ UsersRef, PostsRef } from '../../config/Firebaseconfig';

export default class SavePublish extends Component{
    constructor(props){
        super(props);
        this.state = {
            uidUser: this.props.route.params.uidUser,
            username: this.props.route.params?.nmUsuario,
            selectedValue: '',
            idsPosts: [],
            dadosPost: [],
            commentAtual: '',
            commentsPost: [],
            idForReport: '',
            reportDescription: '',
            loadData: true
        }
    }
    
    commentRef = React.createRef();
    reportRef = React.createRef();

    //Monta tela e puxa dados
    componentDidMount = () => {
        UsersRef.doc(this.state.uidUser).get().then((querySnapshot) => {

            this.pegaDadosPost(querySnapshot.data().savedPublications);

            console.log('Sucesso ao puxar publicações salvas!');
        }).catch((error) => {
            console.log('Erro ao puxar publicações salvas - ',error)
        });
    }
    
    //Pega dados de um determinado post.
    pegaDadosPost = (ids) => {
        
        ids.map((id,index) => (
            PostsRef.doc(id).get().then((querySnapshot) => {
                let dados = { 
                    dados: querySnapshot.data(),
                    idPost: id 
                }
    
                this.setState({ 
                    dadosPost: this.state.dadosPost.concat(dados),
                    loadData: false
                })
    
            }).catch(error => {
                console.log("Erro ao pegar post ",id," - ",error);
            })
        ));

        
    }

    //Remove publicação salva
    removePublications = (idPublication) => {

        const filteredData = this.state.dadosPost.filter(item => item.idPost !== idPublication);
        this.setState({ dadosPost: filteredData });

        UsersRef.doc(this.state.uidUser).update({
            savedPublications: firebase.firestore.FieldValue.arrayRemove(idPublication)
        });
    }
    
    //Cria lista de posts
    renderItem = ({ item }) => {
        return(
            <Posts
                name={item.dados.dadosFireStore.nmUsuario}
                community={item.dados.dadosFireStore.comunidade}
                textPublish={item.dados.dadosFireStore.descricao}
                photo={item.dados.dadosFireStore.imgUsuario}
                onReportPropsClick={() => this.onOpenReport(item.idPost)}
                onCommentsPropsClick={() => this.onOpenComment(item.idPost)}
                imagePost={item.dados.urlsStorage}
                saveText="Remover"
                savePublications={() => this.removePublications(item.idPost)}
            />
        )
    }

    //Caso a lista esteja vazia
    renderEmptyContainer = (text) => {
        return(
            <PostsViewEmptyContainer>
                <PostsViewEmptyText>{text}</PostsViewEmptyText>
            </PostsViewEmptyContainer>
        )
    }

    //<COMENTARIOS>

    //Abre modal de comentários
    onOpenComment = (idPost) => {
        this.setState({commentsPost: '',
        idPostAtual: idPost});

        PostsRef.doc(idPost).get().then((querySnapshot) => {
            this.setState({commentsPost: querySnapshot.data().comments});
        }).catch(error => {
            console.log("Erro ao pegar comentários da publicação! ", error);
        })
        // this.setState({idPostAtual: idPost});
        if (this.commentRef.current) {
          this.commentRef.current.open();
        }
    }

    //Lista de comentários
    renderItemComments = ({ item }) => {
        
        return (
            <Comments
                nameUser={item.user}
                comment={item.comment}
                deleteComment={item.uidUser}
            />
        )
        
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

            Toast.show("Comentário enviado com sucesso!",Toast.SHORT);
        }).catch((error) => {
            console.log("Erro ao enviar comentário - "+error);
        })
    }

    //</COMENTARIOS>

    
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

    
    //Denunciar postagem
    sendReport = (idPublication) => {

        PostsRef.doc(idPublication).set({
            reports: firebase.firestore.FieldValue.arrayUnion(this.state.reportDescription)
        },{merge:true})
        .then(() => {
            this.setState({reportDescription: ''})

            this.reportRef.current.close();

            Toast.show("Denúncia enviada!",Toast.SHORT);
        }).catch((error) => {
            console.log("Erro ao enviar reporte - "+error);
        })

    }

    //Recarregar página
    reloadData = () =>{

        this.setState({ 
            dadosPost: [],
        })

        UsersRef.doc(this.state.uidUser).get().then((querySnapshot) => {

            this.pegaDadosPost(querySnapshot.data().savedPublications);

            console.log('Sucesso ao puxar publicações salvas!');
        }).catch((error) => {
            console.log('Erro ao puxar publicações salvas - ',error)
        });
    }


    render(){
        return (
            <Container>
                <Header>
                    <ActionButton
                        onPress={() => this.props.navigation.goBack()}>
                        <Feather
                            name={"arrow-left"}
                            size={22}
                            color={theme.colors.white}
                        />
                    </ActionButton>
                    <Title>Salvos</Title>
                    <ActionButton>
                        {/* <Feather
                            name={"more-vertical"}
                            size={22}
                            color={theme.colors.white}
                        /> */}
                    </ActionButton>
                </Header>
                <Body>
                    {/* <CommunityView>
                        <Subtitle>Selecione a comunidade</Subtitle>
                        <PickerCommunity
                                selectedValue={this.state.selectedValue}
                                onValueChange={(itemValue, itemIndex) => this.setState({selectedValue: itemValue})}>
                            <PickerCommunity.Item label="Depressão" value="depressão"/>
                            <PickerCommunity.Item label="Ansiedade" value="ansiedade"/>
                            <PickerCommunity.Item label="TDAH" value="TDAH"/>
                        </PickerCommunity>
                    </CommunityView> */}
                    <PostsView>
                        <FlatList
                            data={this.state.dadosPost}
                            renderItem={this.renderItem}
                            onRefresh={this.reloadData}
                            refreshing={this.state.loadData}
                            ListEmptyComponent={() => this.renderEmptyContainer("Você ainda não tem publicações salvas.")}
                            keyExtractor={(item, i) => { return i + "" }}
                        />
                    </PostsView>
                </Body>

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
                                ListEmptyComponent={() => this.renderEmptyContainer("Seja o primeiro a fazer um comentário!")}
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
