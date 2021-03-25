import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native'
import { imageBackgroundMenu } from '../constants/imagesLinks';


export default function MenuScreen() {
  const navigation = useNavigation()
  return (
    <ImageBackground blurRadius={5} source={{uri:imageBackgroundMenu}} style={{flex:1,alignItems:'center',justifyContent:'center'}}>
     <CustomButton textobBotao='Cadastrar Contato' onPress={()=>{navigation.navigate('CadastroScreen')}} />
     <CustomButton textobBotao='Visualizar contatos' onPress={()=>{navigation.navigate('ListaScreen')}} />
    </ImageBackground>
  );
}