import React from 'react';
import { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View,ImageBackground } from 'react-native';
import ElementoLista from '../components/ElementoLista';
import { ImageBackgroundLista } from '../constants/imagesLinks';
import Administrator from '../models/Administrator';

export default function ListaScreen() {
  const [lista,setLista]=useState([])
  useEffect(()=>{
    Administrator.lerListaContatos({atualizarLista:setLista})
  },[])
  
  return (
    <ImageBackground source={{uri:ImageBackgroundLista}} blurRadius={2} style={{alignItems:'center',flex:1}}>
      <View style={{width:'80%'}}>
        <FlatList 
        data={lista}
        keyExtractor={(item,index)=>{return item.id}}
        key={(item)=>{return item.id}}
        renderItem={(item)=>(
          <ElementoLista contato={item} nome={item.nome}/>
        )}
        />
      </View>
    </ImageBackground>
  );
}