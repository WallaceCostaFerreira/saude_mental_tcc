import React, { Component } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { ActivityIndicator } from 'react-native';

import {
    PostView,
    PostHeader,
    ProfileView,
    ProfileImg,
    ProfileText,
    PostCommunityText,
    PostBody,
    PostText,
    CarrouselView,
    PostImage,
    PostActions,
    PostButton,
    PostActionText,
    FeedContainer
} from './style';


import firebase from '../../config/Firebaseconfig';
import theme from '../../constants/theme';

class Post extends Component{

    constructor(props) {
        super(props);
        this.state = {  
            characteres: this.props.textPublish.length,
            urls:[]
        };

        this.showDescription = this.showDescription.bind(this);
    }

    //Montando componente do post
    componentDidMount = () => {
        this.props.imagePost.map((dado, index) => {
            if(dado.startsWith('media/')){
                firebase.storage().ref(dado).getDownloadURL().then((url) => {
                    this.setState({ 
                        urls: this.state.urls.concat([url]),
                    })
                });
            }
        })
    }

    MontaImagens = () => {
        if(!this.props.imagePost){
            return (<ActivityIndicator size="large" color={theme.colors.primary}/> )
        }else{
            return (
                this.props.imagePost.map(function(dado, index) {
                    if(dado.startsWith('media/')){
                        firebase.storage().ref(dado).getDownloadURL().then(function(url) {
                            url != null && 
                            <PostImage key={index} source={ {uri: url }}/>
                        });
                    }
                })
            )
        }
    }

    showDescription() {
        this.setState(({
            characteres: 1
        }));
    }

    render(){

        const { onReportPropsClick } = this.props;
        const { onCommentsPropsClick } = this.props;
        const { savePublications } = this.props;
        const { downloadDocs } = this.props;

        return (
            <FeedContainer>
                <PostView>
                    <PostHeader>
                        <ProfileView>
                            {/* <ProfileImg source={ imgTest } /> */}
                            <ProfileImg>
                                <Feather
                                    name={'user'}
                                    size={18}
                                    color={theme.colors.white}
                                />
                            </ProfileImg>
                            <ProfileText>{this.props.name}</ProfileText>
                        </ProfileView>
                        <PostCommunityText>{this.props.community}</PostCommunityText>
                        {onReportPropsClick ? 
                            <Feather
                                style={{ margin:3 }}
                                name={'flag'}
                                size={14}
                                color={theme.colors.red}
                                onPress={() => onReportPropsClick()}
                            />
                            :
                            <PostView></PostView>
                        }
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
                        <CarrouselView
                            horizontal
                            showsHorizontalScrollIndicator={false}>
                            {this.state.urls 
                                && this.state.urls.map(function(dado, index){
                                    return(<PostImage key={index} source={ {uri: dado }}/>)
                                })
                            }
                        </CarrouselView>
                    </PostBody>
                    <PostActions>
                        {this.props.saveText &&
                            <PostButton
                                onPress={() => savePublications()}>
                                <Feather
                                    style={{ marginRight:6 }}
                                    name={'bookmark'}
                                    size={20}
                                    color={theme.colors.black}
                                />
                                <PostActionText>{this.props.saveText}</PostActionText>
                            </PostButton>
                        }
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
                        {downloadDocs &&
                            <PostButton
                                onPress={() => downloadDocs()}>
                                <Feather
                                    style={{ marginRight:6 }}
                                    name={'download'}
                                    size={20}
                                    color={theme.colors.black}
                                />
                                <PostActionText>Conteúdo</PostActionText>
                            </PostButton>
                        }
                    </PostActions>
                </PostView>
            </FeedContainer>
        );
    }
}

export default Post;
