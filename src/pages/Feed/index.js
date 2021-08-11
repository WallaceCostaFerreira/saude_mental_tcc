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
    Body } from "./style";

import Posts from "../../components/Post";
import Communities from "../../components/Communities";

import firebase from '../../config/Firebaseconfig';

export default function Feed({ navigation }){

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
                <Posts/>
                <Posts/>
                <Posts/>
            </Body>
        </Container>
    )
}
