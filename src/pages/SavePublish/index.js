import React,{ Component, useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';

import {
    Container,
    Header,
    ActionButton,
    Title,
    Body,
    CommunityView,
    Subtitle,
    PickerCommunity,
    PostsView
} from './styles';

import Posts from '../../components/Post';
import postsDados from '../../components/Post/posts.json';
import firebase,{ UsersRef } from '../../config/Firebaseconfig';

export default class SavePublish extends Component{
    constructor(props){
        super(props);
        this.state = {
            uidUser: this.props.route.params.uidUser,
            selectedValue: ''
        }
    }

    //Monta tela e puxa dados
    componentDidMount = () => {
        let savedPublications = [];
        UsersRef.doc(this.state.uidUser).get().then((querySnapshot) => {
            savedPublications = querySnapshot.data().savedPublications;
            console.log('Sucesso ao puxar publicações salvas!');
        }).catch((error) => {
            console.log('Erro ao puxar publicações salvas - ',error)
        });
    }

    //Remove publicação salva
    removePublications = (idPublication) => {
        UsersRef.doc(this.state.uidUser).update({
            savedPublications: firebase.firestore.FieldValue.arrayRemove(idPublication)
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
                        {postsDados && postsDados.map((post,index) =>(
                            <Posts
                                key={index}
                                name={post.name}
                                community={post.community}
                                textPublish={post.textPublish}
                                photo={post.photo}
                                onReportPropsClick={() => this.onOpenReport(post.idPublication)}
                                onCommentsPropsClick={this.onOpenComment}
                                saveText="Remover"
                                savePublications={() => this.removePublications(post.idPublication)}
                            />
                        ))}
                    </PostsView>
                </Body>
            </Container>
        )
    }
}
