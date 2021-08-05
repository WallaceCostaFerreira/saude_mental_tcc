import React from 'react'
import Feather from 'react-native-vector-icons/Feather';

import {
    PostView,
    PostHeader,
    ProfileView,
    ProfileImg,
    ProfileText,
    PostCommunityText,
    PostBody,
    PostText,
    PostImage,
    PostActions,
    PostButton,
    PostActionText,
    FeedContainer
} from './style';

import imgTest from '../../../assets/imgteste.jpg'

const Post = () => {
    return (
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
    )
}

export default Post;
