import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { Cores } from '../constants/Cores';
import Administrator from '../models/Administrator';

export default function ElementoLista({contato}){
    return(
        <TouchableOpacity style={{margin:10,flexDirection:'row',alignItems:'center',backgroundColor:Cores.elementoLista,borderRadius:20,padding:'2%'}} onLongPress={()=>{Administrator.deletaContato({contato:contato.item})}}>
            <Image 
            style = {{height:100,width:100,borderRadius:100}}
            source={{uri:contato.item.linkImagem}}
            />
            <View style={{marginHorizontal:10,width:'90%'}}>
                <Text style={{width:'70%'}}>Nome: {'\n'+contato.item.nome}</Text>
                <Text style={{width:'70%'}}>Numero: {'\n'+contato.item.numero}</Text>
                <Text>E-mail:</Text>
                <Text style={{width:'70%',fontSize:12}}>{contato.item.email}</Text>
            </View>
        </TouchableOpacity>
    )
}