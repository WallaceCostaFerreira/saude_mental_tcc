import React, { Component } from 'react'
import Feather from 'react-native-vector-icons/Feather';

import {
    CommentContainer,
    CommentActionView,
    CommentInput,
    CommentButton,
    CommentScroll,
    ProfileImg,
    ProfileText,
    CommentTitle,
    CommentView,
    CommentProfileView,
    CommentTextView,
    CommentText
} from './style';

class Comments extends Component{
    render(){

        return(
        <CommentContainer>
            <CommentActionView>
                <CommentInput/>
                <CommentButton>
                    <Feather
                        name={'send'}
                        size={18}
                        color={'#fff'}
                    />
                </CommentButton>
            </CommentActionView>
            <CommentScroll>
                <CommentTitle>Comentários</CommentTitle>
                <CommentView>
                    <CommentProfileView>
                        <ProfileImg>
                            <Feather
                                name={'user'}
                                size={18}
                                color={'#fff'}
                            />
                        </ProfileImg>
                        <ProfileText>Wallace Costa</ProfileText>
                    </CommentProfileView>
                    <CommentTextView>
                        <CommentText>{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}</CommentText>
                    </CommentTextView>
                </CommentView>
                <CommentView>
                    <CommentProfileView>
                        <ProfileImg>
                            <Feather
                                name={'user'}
                                size={18}
                                color={'#fff'}
                            />
                        </ProfileImg>
                        <ProfileText>Wallace Costa</ProfileText>
                    </CommentProfileView>
                    <CommentTextView>
                        <CommentText>{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}</CommentText>
                    </CommentTextView>
                </CommentView>
                <CommentView>
                    <CommentProfileView>
                        <ProfileImg>
                            <Feather
                                name={'user'}
                                size={18}
                                color={'#fff'}
                            />
                        </ProfileImg>
                        <ProfileText>Wallace Costa</ProfileText>
                    </CommentProfileView>
                    <CommentTextView>
                        <CommentText>{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}</CommentText>
                    </CommentTextView>
                </CommentView>
                <CommentView>
                    <CommentProfileView>
                        <ProfileImg>
                            <Feather
                                name={'user'}
                                size={18}
                                color={'#fff'}
                            />
                        </ProfileImg>
                        <ProfileText>Wallace Costa</ProfileText>
                    </CommentProfileView>
                    <CommentTextView>
                        <CommentText>{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}</CommentText>
                    </CommentTextView>
                </CommentView>
                <CommentView>
                    <CommentProfileView>
                        <ProfileImg>
                            <Feather
                                name={'user'}
                                size={18}
                                color={'#fff'}
                            />
                        </ProfileImg>
                        <ProfileText>Wallace Costa</ProfileText>
                    </CommentProfileView>
                    <CommentTextView>
                        <CommentText>{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}</CommentText>
                    </CommentTextView>
                </CommentView>
            </CommentScroll>
        </CommentContainer>
    )};
}

export default Comments;
