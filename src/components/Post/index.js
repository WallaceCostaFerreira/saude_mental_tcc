import React, { Component } from 'react'
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
import theme from '../../constants/theme';

class Post extends Component{
    render(){
        const { onEventPropsClick } = this.props;
        const { onCommentsPropsClick } = this.props;
        return (
            <FeedContainer>
                <PostView>
                    <PostHeader>
                        <ProfileView>
                            <ProfileImg source={ imgTest } />
                            <ProfileText>{this.props.name}</ProfileText>
                        </ProfileView>
                        <PostCommunityText>{this.props.community}</PostCommunityText>
                        
                        <Feather
                            style={{ margin:3 }}
                            name={'more-vertical'}
                            size={14}
                            color={theme.colors.black}
                            onPress={() => onEventPropsClick()}
                        />
                    </PostHeader>
                    <PostBody>
                        <PostText>
                            {/* {this.props.textPublish.substr(0, 100)} */}

                            {this.props.textPublish.length > 100 
                            ? `${this.props.textPublish.substr(0, 100)}`
                            
                            (<PostText>Ver mais...</PostText>)
                            
                            : 'Menos de 100' }
                        
                        </PostText>
                        <PostImage source={ imgTest }/>
                    </PostBody>
                    <PostActions>
                        <PostButton
                            // onPress={() => onCommentsPropsClick()}
                            >
                            <Feather
                                style={{ marginRight:6 }}
                                name={'bookmark'}
                                size={20}
                                color={theme.colors.black}
                            />
                            <PostActionText>Salvar</PostActionText>
                        </PostButton>
                        <PostButton
                            onPress={() => onCommentsPropsClick()}>
                            <Feather
                                style={{ marginRight:6 }}
                                name={'message-square'}
                                size={20}
                                color={theme.colors.black}
                            />
                            <PostActionText>Comentar</PostActionText>
                        </PostButton>
                    </PostActions>
                </PostView>
            </FeedContainer>
        );
    }
}

export default Post;
