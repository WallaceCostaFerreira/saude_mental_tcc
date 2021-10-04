import React, { Component } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import theme from '../../constants/theme'

import {
    ProfileImg,
    ProfileText,
    CommentView,
    CommentProfileView,
    CommentTextView,
    CommentText
} from './style';

class Comments extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <CommentView>
                <CommentProfileView>
                    <ProfileImg>
                        <Feather
                            name={'user'}
                            size={18}
                            color={theme.colors.white}
                        />
                    </ProfileImg>
                    <ProfileText>{this.props.nameUser}</ProfileText>
                </CommentProfileView>
                <CommentTextView>
                    <CommentText>{this.props.comment}</CommentText>
                </CommentTextView>
            </CommentView>
        )
    };
}

export default Comments;
