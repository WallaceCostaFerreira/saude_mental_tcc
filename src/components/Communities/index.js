import React from 'react'
import Feather from 'react-native-vector-icons/Feather';

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
                <CommunityText>Suas comunidades</CommunityText>
                <Feather
                    style={{ margin:3 }}
                    name={'more-horizontal'}
                    size={14}
                    color={'#000'}
                />
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
                <CommunityButton>
                    <CommunityText>TDAH</CommunityText>
                </CommunityButton>
                <CommunityButton>
                    <CommunityText>TDAH</CommunityText>
                </CommunityButton>
                <CommunityButton>
                    <CommunityText>TDAH</CommunityText>
                </CommunityButton>
                <CommunityButton>
                    <CommunityText>TDAH</CommunityText>
                </CommunityButton>
                <CommunityButton>
                    <CommunityText>TDAH</CommunityText>
                </CommunityButton>
                <CommunityButton>
                    <CommunityText>TDAH</CommunityText>
                </CommunityButton>
            </CommunityBody>
        </CommunityView>
    )
}

export default Communities;
