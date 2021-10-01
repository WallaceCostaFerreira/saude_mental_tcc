import React, { Component } from 'react'
import Feather from 'react-native-vector-icons/Feather';

import theme from '../../constants/theme'

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

import commentsData from '../Comments/comments.json';

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
                        color={theme.colors.white}
                    />
                </CommentButton>
            </CommentActionView>
            <CommentScroll>
                <CommentTitle>Comentários</CommentTitle>
                {commentsData && commentsData.map((commentData, index) =>(
                    <CommentView key={index}>
                        <CommentProfileView>
                            <ProfileImg>
                                <Feather
                                    name={'user'}
                                    size={18}
                                    color={theme.colors.white}
                                />
                            </ProfileImg>
                            <ProfileText>{commentData.nameUser}</ProfileText>
                        </CommentProfileView>
                        <CommentTextView>
                            <CommentText>{commentData.comment}</CommentText>
                        </CommentTextView>
                    </CommentView>
                ))}

               </CommentScroll>
        </CommentContainer>
    )};
}

export default Comments;
