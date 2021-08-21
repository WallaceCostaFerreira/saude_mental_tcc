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

    constructor(props) {
        super(props);
        this.state = {  characteres: this.props.textPublish.length };

        this.showDescription = this.showDescription.bind(this);
    }

    showDescription() {
        this.setState(({
            characteres: 1
        }));
    }

    render(){

        const { onReportPropsClick } = this.props;
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
                            onPress={() => onReportPropsClick()}
                        />
                    </PostHeader>
                    <PostBody>
                        <PostText
                            onPress={this.showDescription}>
                            {this.state.characteres > 110 
                            ?   <PostText>{this.props.textPublish.substr(0, 110)}... 
                                    <PostText 
                                        style={{color:theme.colors.black}}>
                                        Ver mais
                                    </PostText>
                                </PostText>
                            : <PostText>{ this.props.textPublish }</PostText>}
                        </PostText>
                        <PostImage source={ imgTest }/>
                    </PostBody>
                    <PostActions>
                        <PostButton>
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
