import React, { Component } from 'react';
import { 
    StatusBar, 
    Text, 
    FlatList,
    ToastAndroid as Toast
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Modalize } from 'react-native-modalize';

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
    PostsViewEmptyContainer,
    PostsViewEmptyText,

    CommentContainer,
    CommentActionView,
    CommentInput,
    CommentButton,
    CommentScroll,
    CommentTitle
} from "./style";

import Posts from "../../components/Post";

import imgTest from "../../../assets/imgteste.jpg"
import Comments from "../../components/Comments";
import firebase,{ UsersRef, PostsRef } from '../../config/Firebaseconfig';

export default class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            uidUser: this.props.route.params?.uidUser,
            nmUsuario: this.props.route.params?.nmUsuario,
            imgUsuario: this.props.route.params?.imgUsuario,
            dadosPost: [],
            commentAtual: '',
            commentsPost: [],
            loadData: true,
        }
    }
    
    commentRef = React.createRef();

    //Monta tela e puxa dados
    componentDidMount = () => {
        UsersRef.doc(this.state.uidUser).get().then((querySnapshot) => {

            this.pegaDadosPost(querySnapshot.data().yourPublications);

            console.log('Sucesso ao puxar suas publicações!');
        }).catch((error) => {
            console.log('Erro ao puxar suas publicações - ',error)
            
            this.setState({ 
                loadData: false,
            })
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
        
        this.setState({ 
            loadData: false,
        })

        
    }

    // Topo de lista
    renderHeader = () =>{
        return(
            <>
                <Header>
                        <ProfileImg>
                            <Feather
                                name={'user'}
                                size={35}
                                color={theme.colors.white}
                            />
                        </ProfileImg>
                        {/* <ProfileImg source={imgTest}/> */}
                </Header>
                <UserInfos>
                    <TitlesText>{this.state.nmUsuario}</TitlesText>
                    {/* <InfosText>+55(11)91234-1234</InfosText>*/}
                </UserInfos>
            </>
        )
    }

    //Cria lista de posts
    renderItem = ({ item }) => {
        return(
            <Posts
                name={item.dados.dadosFireStore.nmUsuario}
                community={item.dados.dadosFireStore.comunidade}
                textPublish={item.dados.dadosFireStore.descricao}
                photo={item.dados.dadosFireStore.imgUsuario}
                imagePost={item.dados.urlsStorage}
                onCommentsPropsClick={() => this.onOpenComment(item.idPost)}
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
            />
        )
        
    }

    //Salva comentários na publicação
    sendCommentPublication = (idPublication) => {
        let dados = {
            user: this.state.nmUsuario,
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

    //Recarrega dados do perfil
    reloadData = () =>{
        
        this.setState({ 
            dadosPost:[]
        })
        UsersRef.doc(this.state.uidUser).get().then((querySnapshot) => {

            if(querySnapshot.data()){
                this.pegaDadosPost(querySnapshot.data().yourPublications);
            }else{
                this.setState({ 
                    loadData: false,
                })
            }

            console.log('Sucesso ao puxar suas publicações!');
        }).catch((error) => {
            console.log('Erro ao puxar suas publicações - ',error)
            this.setState({ 
                loadData: false,
            })
        });
    }

    render(){
        return (
            <Container showsVerticalScrollIndicator={false}>
                <Body>
                    {/* <CommunityView>
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
                    </CommunityView> */}
                    <FlatList
                        contentContainerStyle={{ flexGrow: 1 }}
                        data={this.state.dadosPost}
                        renderItem={this.renderItem}
                        ListHeaderComponent={this.renderHeader}
                        onRefresh={this.reloadData}
                        refreshing={this.state.loadData}
                        ListEmptyComponent={() => this.renderEmptyContainer("Você ainda não criou publicações.")}
                        keyExtractor={(item, i) => { return i + "" }}
                    />
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
            </Container>
        )
    }
}
