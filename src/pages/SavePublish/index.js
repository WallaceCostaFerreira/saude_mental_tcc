import React,{ useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';

import {
    Container,
    Header,
    ActionButton,
    Title,
    Body,
    CommunityView,
    Subtitle,
    PickerCommunity,
    PostsView
} from './styles';

import Posts from '../../components/Post';
import postsDados from '../../components/Post/posts.json';

export default function SavePublish({ navigation: { goBack } }) {
    const [selectedValue, setSelectedValue] = useState("Depressão");
    return (
        <Container>
            <Header>
                <ActionButton
                    onPress={() => goBack()}>
                    <Feather
                        name={"arrow-left"}
                        size={22}
                        color={theme.colors.white}
                    />
                </ActionButton>
                <Title>Salvos</Title>
                <ActionButton>
                    <Feather
                        name={"more-vertical"}
                        size={22}
                        color={theme.colors.white}
                    />
                </ActionButton>
            </Header>
            <Body>
                <CommunityView>
                    <Subtitle>Selecione a comunidade</Subtitle>
                    <PickerCommunity
                            selectedValue={selectedValue}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                        <PickerCommunity.Item label="Depressão" value="depressão"/>
                        <PickerCommunity.Item label="Ansiedade" value="ansiedade"/>
                        <PickerCommunity.Item label="TDAH" value="TDAH"/>
                    </PickerCommunity>
                </CommunityView>
                <PostsView>
                    {postsDados && postsDados.map((post,index) =>(
                        <Posts
                            key={index}
                            name={post.name}
                            community={post.community}
                            textPublish={post.textPublish}
                            photo={post.photo}
                        />
                    ))}
                </PostsView>
            </Body>
        </Container>
    )
}
