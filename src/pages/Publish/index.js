import React, { useState, useEffect, useRef } from 'react'
import { 
    Platform, 
    ToastAndroid as Toast 
} from 'react-native';
import { Modalize } from 'react-native-modalize';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import theme from '../../constants/theme';
import { MediaType } from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
// import * as firebase from "firebase";
import firebase,{ PostsRef, UsersRef } from '../../config/Firebaseconfig';

import uuid from "uuid";
import * as DocumentPicker from 'expo-document-picker';



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
    const [descricacao, setDescricao] = useState ("");
    const [selectedFiles, AddSelectedFile] = useState([]);
    const [fileUrls, setFileUrls] = useState([]);
    const dataImages = route.params?.data;
    const attachmentOptionsRef = useRef(null);
    const sendRef = useRef(null);
    const [selectedValue, setSelectedValue] = useState("depressao");

    // Envia informações para o Firestore e Storage
    const onSend = () => {
        
        let dadosFireStore = {
            comunidade: '',
            descricao: '',
            dtPublicacao: '',
            nmUsuario: '',
            imgUsuario: '',
        };

        let urlsStorage = [];

        dadosFireStore.comunidade = selectedValue;
        dadosFireStore.descricao = descricacao;
        dadosFireStore.dtPublicacao = new Date();
        dadosFireStore.nmUsuario = route.params?.nmUsuario;
        dadosFireStore.imgUsuario = route.params?.imgUsuario;
        dadosFireStore.uidUser = route.params?.uidUser;
        
        if(selectedFiles.length > 0){
            console.log("Iniciando envio de arquivos.");
            selectedFiles.map(function(dado, index){
                uploadFile(dado).then((snapshot) => {
                    console.log("Arquivo ",index + 1," enviado!");
                    // setFileUrls([...fileUrls ,snapshot._delegate._location.path_]);
                    urlsStorage.push(snapshot._delegate._location.path_)

                    if(selectedFiles.length - 1 == index){
                        enviaDadosFirestore(dadosFireStore, urlsStorage);
                    }
                }).catch((error) => {
                    console.log("Erro ao enviar arquivo ",index + 1," - ",error);
                })
            })
        }else{
            enviaDadosFirestore(dadosFireStore, urlsStorage);
        }
    }

    // Salva dados no firestore do Post e no Usuário o id do post.
    const enviaDadosFirestore = (dadosFireStore, urlsStorage) => {

        const docRandomico = PostsRef.doc();
        docRandomico.set({
            dadosFireStore,
            urlsStorage
        }).then(() =>{
            Toast.show("Publicação criada com sucesso!",Toast.SHORT);
        }).catch((error) =>{
            console.log("Erro ao finalizar envio de publicação! ",error);
        })

        let idPost = docRandomico._delegate._key.path.segments[1];
        
        UsersRef.doc(route.params?.uidUser).set({
            yourPublications: firebase.firestore.FieldValue.arrayUnion(idPost)
        },{merge:true});
        toFeed();
    }

    // Upload do arquivo para Storage
    const uploadFile = async (file) => {
        const response = await fetch(file.uri);
        const blob = await response.blob();

        var ref = await firebase.storage().ref().child(file.folder +"/"+ uuid.v1() +"_"+ file.filename);
        ref.put(blob);
        return ref;
    }
    
    // Ativa quando retorna dados da tela de Gallery
    useEffect(() => {
        if(dataImages){
            dataImages.map((image, index) => {

                let fileObj = { 
                    uri: image.uri, 
                    filename: image.filename,
                    folder: 'media'
                };

                console.log("Imagens - ",image);

                AddSelectedFile([...selectedFiles, fileObj]);
                setImageArr([...imageArr, image.uri]);
                return true;
            });
        }
    }, [dataImages])

    // Abre modal de anexos
    const onAttachmentOptions = () => {
        attachmentOptionsRef.current?.open();
    };

    //Volta para a tela de Feed
    const toFeed = () =>{
        navigation.navigate("Feed");
    }

    //Vai para a camera
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

            const getFileName = s => s.includes('/') && s.substr(s.lastIndexOf('/') + 1).split(' ')[0];

            console.log(getFileName('file:///data/user/0/host.exp.exponent/cache/ExperienceData/UNVERIFIED-192.168.1.239-saude_mental_tcc/ImagePicker/9015cf02-221a-478d-bcbb-1bc7f806b1bf.jpg'));

            let fileObj = { 
                uri: result.uri, 
                filename: getFileName(result.uri),
                folder: 'media'
            };

            console.log(result);
            console.log(fileObj);

            AddSelectedFile([...selectedFiles,fileObj]);

            setImageArr([...imageArr, result.uri]);

        }
    }

    // Vai para a seleção de imagens da galeria
    const toGalleryImage = () =>{
        navigation.navigate("Gallery",{type:MediaType.photo});
        attachmentOptionsRef.current?.close();
    }

    // Vai para a seleção de videos na galeria
    const toGalleryVideo = () =>{
        navigation.navigate("Gallery",{type:MediaType.video});
        attachmentOptionsRef.current?.close();
    }

    // Abre seleção de PDFs
    const toPDF = async () =>{
        DocumentPicker.getDocumentAsync({type: "application/pdf", copyToCacheDirectory:false})
            .then(result => {
                if (result.type !== "cancel") {
                    let fileObj = { 
                        uri: result.uri, 
                        filename: result.name,
                        folder: 'docs'
                    };
        
                    console.log(fileObj);
        
                    AddSelectedFile([...selectedFiles,fileObj]);
                }
            })
            .catch((error) => {
                alert("Erro ao tentar selecionar PDF - "+ error);
            });
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
                    <PickerCommunity.Item label="Depressão" value="depressao"/>
                    <PickerCommunity.Item label="Ansiedade" value="ansiedade"/>
                    <PickerCommunity.Item label="TDAH" value="tdah"/>
                </PickerCommunity>
                <TextPublish
                    value = {descricacao}
                    onChangeText = {(text) => setDescricao(text)}
                />
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

                    <SendButton onPress={onSend}>
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
                <AttachmentOptionButton
                    onPress={toPDF}>
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

