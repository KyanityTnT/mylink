import React, {useState} from 'react';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Modal } from 'react-native';


import{ LinearGradient} from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';
import ModalLink from '../../components/ModalLink';
import{Feather} from '@expo/vector-icons';
import { ContainerLogo, Logo, ContainerContent, Title, SubTitle, ContainerInput, BoxIcon, Input, ButtonLink, ButtonLinkText } from './styles';

export default function Home(){

    const [input, setInput] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    function handleShortLink(){
        //alert('URL Encurtada: '+input )
        setModalVisible(true);
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <LinearGradient
        colors={['#E5E5E5','#132742' ]}
        style={{ flex:1, justifyContent: 'center'}}

        
        >

            <StatusBarPage
            barStyle="light-content"
            backgroundColor="#E5E5E5"


            />

            <Menu/>
            <KeyboardAvoidingView 
            behavior={ Platform.OS === 'android' ? 'padding' : 'position'}
            enabled

            >

            <ContainerLogo>
                <Logo source={require('../../assests/Logo.png')}>


                </Logo>


            </ContainerLogo>
           

           <ContainerContent>
              <Title>SujeitoLink</Title>
                <SubTitle>Cole seu link para encurtar</SubTitle>

            <ContainerInput>
                <BoxIcon>
                <Feather
                name="link"
                size={22}
                color="#FFF"
                
                />
              

                </BoxIcon>
                <Input
                placeholder="Cole seu link aqui..."
                placeholderTextColor="white"
                outCapitaLize="none"
                outCorrect={false}
                keyboardType="url"
                value={input}
                onChangeText={ (text) => setInput(text) }
                
                />


            </ContainerInput>

            <ButtonLink onPress={ handleShortLink} >
                <ButtonLinkText>Gerar Link</ButtonLinkText>

            </ButtonLink>

           </ContainerContent>
           </KeyboardAvoidingView>

        <Modal visible={modalVisible} transparent animationType='slide'>
        <ModalLink onClose={()=> setModalVisible(false)}/>

        </Modal>

        </LinearGradient>
        </TouchableWithoutFeedback>
    )
}