import React, { useState, useEffect, useRef } from 'react'
import { Platform } from 'react-native';
import { Modalize } from 'react-native-modalize';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import theme from '../../constants/theme';
import { MediaType } from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';


import {
    Container,
    Header,
    BackButton,
    Title,
    Body,
    Subtitle,
    PickerCommunity,
    TextPublish,
    AttachmentSelectedContainer,
    ImageSelected,
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

export default function Publish({ route,navigation }) {
    const [imageArr, setImageArr] = useState([]);

    const dataImages = route.params?.data;
    const attachmentOptionsRef = useRef(null);
    const [selectedValue, setSelectedValue] = useState("");

    const onAttachmentOptions = () => {
        attachmentOptionsRef.current?.open();
    };

    //Volta para a tela de Feed
    const toFeed = () =>{
        navigation.navigate("Feed");
    }

    
    useEffect(() => {
        if(dataImages){
            dataImages.map(function(image, index){
                setImageArr([...imageArr,image.uri]);
                return true;
            });
        }
    }, [dataImages])

    const toCamera = async () =>{

        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        
        if (permissionResult.granted === false) {
            alert("Permissão necessária!");
            return;
        }

        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
            videoMaxDuration: 120,
        });

        if (!result.cancelled) {
            setImageArr([...imageArr, result.uri]);
        }
    }

    const toGalleryImage = () =>{
        navigation.navigate("Gallery",{type:MediaType.photo});
        attachmentOptionsRef.current?.close();
    }

    const toGalleryVideo = () =>{
        navigation.navigate("Gallery",{type:MediaType.video});
        attachmentOptionsRef.current?.close();
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
                        color={theme.colors.white}
                    />
                </BackButton>
                <Title>Criar publicação</Title>
                <BackButton>
                    {/* <Feather
                        style={{visibility:none}}
                        name={'more-vertical'}
                        size={22}
                        color={theme.colors.white}
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
                <AttachmentSelectedContainer
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{paddingRight: 15}}
                >
                    {imageArr && 
                        imageArr.map(function(image2,index){
                            return(<ImageSelected key={index} source={{ uri: image2 }}/>)
                        })
                    }
                </AttachmentSelectedContainer>
                <ActionView>
                    <AttachmentButton
                        onPress={onAttachmentOptions}>
                        <AttachmentView>
                            <Feather 
                                style={{
                                    borderRightWidth:1,
                                    borderRightColor: theme.colors.white,
                                    paddingRight: 10
                                }}
                                name={"upload"}
                                size={22}
                                color={theme.colors.white}
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
                                    borderLeftColor:theme.colors.white,
                                    paddingLeft: 10
                                }}
                                name={"send"}
                                size={22}
                                color={theme.colors.white}
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
                <AttachmentOptionButton
                    onPress={toCamera}>
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
                <AttachmentOptionButton
                    onPress={toGalleryImage}>
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
                <AttachmentOptionButton
                    onPress={toGalleryVideo}>
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

