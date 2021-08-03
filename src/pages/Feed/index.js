import React, {useState, useEffect } from 'react';
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
    CommunityView, 
    CommunityText, 
    CommunityHeader, 
    CommunityBody, 
    Communities,
    FeedContainer,
    PostView,
    PostHeader,
    PostCommunityText,
    PostBody,
    PostText,
    PostActions,
    PostButton,
    PostActionText,
    PostImage,
    Footer } from "./style";

import firebase from '../../config/Firebaseconfig';

import imgTest from '../../images/imgteste.jpg'

export default function Feed({ navigation }){

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
                <ProfileView>
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
                <CommunityView>
                    <CommunityHeader>
                        <CommunityText>Suas comunidades</CommunityText>
                        <Feather
                            style={{ margin:3 }}
                            name={'more-horizontal'}
                            size={14}
                            color={'#000'}
                        />
                    </CommunityHeader>
                    <CommunityBody>
                        <Communities>
                            <CommunityText>Ansiedade</CommunityText>
                        </Communities>
                        <Communities>
                            <CommunityText>Depressão</CommunityText>
                        </Communities>
                        <Communities>
                            <CommunityText>TDAH</CommunityText>
                        </Communities>
                        <Communities>
                            <CommunityText>TDAH</CommunityText>
                        </Communities>
                        <Communities>
                            <CommunityText>TDAH</CommunityText>
                        </Communities>
                        <Communities>
                            <CommunityText>TDAH</CommunityText>
                        </Communities>
                        <Communities>
                            <CommunityText>TDAH</CommunityText>
                        </Communities>
                        <Communities>
                            <CommunityText>TDAH</CommunityText>
                        </Communities>
                        <Communities>
                            <CommunityText>TDAH</CommunityText>
                        </Communities>
                    </CommunityBody>
                </CommunityView>
                <FeedContainer>
                    <PostView>
                        <PostHeader>
                            <ProfileView>
                                <ProfileImg>
                                    <Feather
                                        name={'user'}
                                        size={18}
                                        color={'#fff'}
                                    />
                                </ProfileImg>
                                <ProfileText>João josé</ProfileText>
                            </ProfileView>
                            <PostCommunityText>Ansiedade</PostCommunityText>
                            <Feather
                                style={{ margin:3 }}
                                name={'more-vertical'}
                                size={14}
                                color={'#000'}
                            />
                        </PostHeader>
                        <PostBody>
                            <PostText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</PostText>
                            <PostImage source={ imgTest }/>
                        </PostBody>
                        <PostActions>
                            <PostButton>
                                <Feather
                                    style={{ marginRight:6 }}
                                    name={'heart'}
                                    size={20}
                                    color={'#FF2E2E'}
                                />
                                <PostActionText>Amei</PostActionText>
                            </PostButton>
                            <PostButton>
                                <Feather
                                    style={{ marginRight:6 }}
                                    name={'message-square'}
                                    size={20}
                                    color={'#000'}
                                />
                                <PostActionText>Comentar</PostActionText>
                            </PostButton>
                        </PostActions>
                    </PostView>

                    <PostView>
                        <PostHeader>
                            <ProfileView>
                                <ProfileImg>
                                    <Feather
                                        name={'user'}
                                        size={18}
                                        color={'#fff'}
                                    />
                                </ProfileImg>
                                <ProfileText>Pedro Alves</ProfileText>
                            </ProfileView>
                            <PostCommunityText>Depressão</PostCommunityText>
                            <Feather
                                style={{ margin:3 }}
                                name={'more-vertical'}
                                size={14}
                                color={'#000'}
                            />
                        </PostHeader>
                        <PostBody>
                            <PostText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</PostText>
                            <PostImage source={ imgTest }/>
                        </PostBody>
                        <PostActions>
                            <PostButton>
                                <Feather
                                    style={{ marginRight:6 }}
                                    name={'heart'}
                                    size={20}
                                    color={'#FF2E2E'}
                                />
                                <PostActionText>Amei</PostActionText>
                            </PostButton>
                            <PostButton>
                                <Feather
                                    style={{ marginRight:6 }}
                                    name={'message-square'}
                                    size={20}
                                    color={'#000'}
                                />
                                <PostActionText>Comentar</PostActionText>
                            </PostButton>
                        </PostActions>
                    </PostView>

                </FeedContainer>
            </Body>
        </Container>
    )
}
