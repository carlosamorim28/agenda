import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomEditText from '../components/CustomEditText';
import { pickImage } from '../constants/FunctionsUploadImage';
import { imageBackgroundCadastro } from '../constants/imagesLinks';
import Administrator from '../models/Administrator';
import Contato from '../models/Contato'

export default function CadastroScreen() {
  const [nome, setNome] = useState()
  const [numero, setNumero] = useState()
  const [email, setEmail] = useState()
  const [image, setImage] = useState()
  
  function escolherImagem(){
    pickImage({editable:true}).then((uri)=>{
      setImage(uri)
    })
  }

  function cadastra(){
    if(nome&&numero&&email){
      Administrator.cadastraContato({contato:new Contato({nome,numero,email,linkImagem:image})})
    }else{
      alert('Preencha todos so campos')
    }
  }

  return (
    <ImageBackground blurRadius={5} source={{uri:imageBackgroundCadastro}} style={{flex:1, alignItems:'center', justifyContent: 'center'}} >
      <CustomEditText placeholder='Nome' value = {nome} onChangeText={(text)=>{setNome(text)}} />
      <CustomEditText placeholder='Número de telefone'value={numero} onChangeText={(text)=>{setNumero(text)}} keyboardType='numeric' />
      <CustomEditText placeholder='E-Mail' value={email} onChangeText={(text)=>{setEmail(text)}}/>
      <CustomButton textobBotao='Adicionar uma imagem' onPress={escolherImagem}/>
      <CustomButton textobBotao='Cadastrar Contato' onPress={cadastra}/>
    </ImageBackground>
  );
}