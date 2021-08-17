import React, { useState, useRef } from 'react'
import { Modalize } from 'react-native-modalize';
import ImagePicker from 'react-native-image-picker';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import theme from '../../constants/theme';


import {
    Container,
    Header,
    BackButton,
    Title,
    Body,
    Subtitle,
    PickerCommunity,
    TextPublish,
    ActionView,
    AttachmentButton,
    AttachmentView,
    AttachmentText,
    SendButton,
    SendView,
    SendText,
    AttachmentOptionsContainer,
    AttachmentOptionButton,
    AttachmentOptionText,
    ViewLine
} from './style'

export default function Publish({ navigation }) {

    const attachmentOptionsRef = useRef(null);
    const [selectedValue, setSelectedValue] = useState("java");
    

    const onAttachmentOptions = () => {
        attachmentOptionsRef.current?.open();
    };

    const toFeed = () =>{
        navigation.navigate("Feed");
    }

    return (
        <>
        <Container>
            <Header>
                <BackButton
                    onPress={toFeed}>
                    <Feather
                        name={'arrow-left'}
                        size={22}
                        color={'#fff'}
                    />
                </BackButton>
                <Title>Criar publicação</Title>
                <BackButton>
                    {/* <Feather
                        style={{visibility:none}}
                        name={'more-vertical'}
                        size={22}
                        color={'#fff'}
                    /> */}
                </BackButton>
            </Header>
            <Body>
                <Subtitle>Selecione a comunidade</Subtitle>
                <PickerCommunity
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                    <PickerCommunity.Item label="Depressão" value="depressão"/>
                    <PickerCommunity.Item label="Ansiedade" value="ansiedade"/>
                    <PickerCommunity.Item label="TDAH" value="TDAH"/>
                </PickerCommunity>
                <TextPublish/>
                <ActionView>
                    <AttachmentButton
                        onPress={onAttachmentOptions}>
                        <AttachmentView>
                            <Feather 
                                style={{
                                    borderRightWidth:1,
                                    borderRightColor:'#fff',
                                    paddingRight: 10
                                }}
                                name={"upload"}
                                size={22}
                                color={'#fff'}
                            />
                            <AttachmentText>Anexo</AttachmentText>
                        </AttachmentView>
                    </AttachmentButton>

                    <SendButton>
                        <SendView>
                            <SendText>Enviar</SendText>
                            <Feather 
                                style={{
                                    borderLeftWidth:1,
                                    borderLeftColor:'#fff',
                                    paddingLeft: 10
                                }}
                                name={"send"}
                                size={22}
                                color={'#fff'}
                            />
                        </SendView>
                    </SendButton>
                </ActionView>
            </Body>

            

        </Container>
        <Modalize
            ref={attachmentOptionsRef}
            scrollViewProps={{ showsVerticalScrollIndicator: false }}
            snapPoint={400}
            modalHeight={400}>
        {/* Verificar se pode virar um componente a ser reutilizado */}
        
            <AttachmentOptionsContainer>
                <AttachmentOptionButton>
                    <Feather
                        name={"camera"}
                        size={22}
                        color={theme.colors.primary}
                    />
                    <AttachmentOptionText>Câmera</AttachmentOptionText>
                    <Feather
                        name={"camera"}
                        size={22}
                        color={theme.colors.primary}
                    />
                </AttachmentOptionButton>
                <ViewLine/>
                <AttachmentOptionButton>
                    <Feather
                        name={"image"}
                        size={22}
                        color={theme.colors.primary}
                    />
                    <AttachmentOptionText>Imagem</AttachmentOptionText>
                    <Feather
                        name={"image"}
                        size={22}
                        color={theme.colors.primary}
                    />
                </AttachmentOptionButton>
                <ViewLine/>
                <AttachmentOptionButton>
                    <Feather
                        name={"video"}
                        size={22}
                        color={theme.colors.primary}
                    />
                    <AttachmentOptionText>Vídeo</AttachmentOptionText>
                    <Feather
                        name={"video"}
                        size={22}
                        color={theme.colors.primary}
                    />
                </AttachmentOptionButton>
                <ViewLine/>
                <AttachmentOptionButton>
                    <FontAwesome5
                        name={"file-pdf"}
                        size={22}
                        color={theme.colors.primary}
                    />
                    <AttachmentOptionText>PDF</AttachmentOptionText>
                    <FontAwesome5
                        name={"file-pdf"}
                        size={22}
                        color={theme.colors.primary}
                    />
                </AttachmentOptionButton>
                <ViewLine/>
            </AttachmentOptionsContainer>
        </Modalize>
        </>
    )
}

