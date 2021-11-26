import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import theme from '../../constants/theme';

import {
    CommunityView,
    CommunityHeader,
    CommunityText,
    CommunityBody,
    CommunityButton
} from './style'

const Communities = () => {
    return (
        <CommunityView>
            <CommunityHeader>
                <CommunityText>Nossas comunidades</CommunityText>
            </CommunityHeader>
            <CommunityBody>
                <CommunityButton>
                    <CommunityText>Ansiedade</CommunityText>
                </CommunityButton>
                <CommunityButton>
                    <CommunityText>Depressão</CommunityText>
                </CommunityButton>
                <CommunityButton>
                    <CommunityText>TDAH</CommunityText>
                </CommunityButton>
            </CommunityBody>
        </CommunityView>
    )
}

export default Communities;
