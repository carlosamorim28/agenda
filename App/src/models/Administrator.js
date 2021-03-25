import firebase from 'firebase'
import { ToastAndroid } from 'react-native'
import { Categorias } from '../constants/Categorias'
import { pickImage, uploadImage } from '../constants/FunctionsUploadImage'
import { imageDefault } from '../constants/imagesLinks'

export default class Administrator{
    static cadastraContato({contato}){
        if(!contato.linkImagem){
            contato.linkImagem = imageDefault
        }
        uploadImage({uri:contato.linkImagem,categoria:Categorias.contatos,imageId:contato.id}).then(()=>{
            firebase.storage().ref().child('images').child(Categorias.contatos).child(contato.id).getDownloadURL().then((url)=>{
                var contatoUpload = contato 
                contatoUpload.linkImagem = url
                contatoUpload = JSON.parse(JSON.stringify(contatoUpload))
                firebase.firestore().collection(Categorias.contatos).doc(contatoUpload.id).set(contatoUpload).then(()=>{ 
                    ToastAndroid.show('Contato cadastrado com sucesso',ToastAndroid.SHORT)
                }).catch((error)=>{console.log(error)})
            })
        
        })
    }

    static deletaContato({contato}){
        firebase.firestore().collection(Categorias.contatos).doc(contato.id).delete().then(()=>{
            ToastAndroid.show('Contato removido',ToastAndroid.SHORT)
        })
    }

    static lerListaContatos({atualizarLista=()=>{}}){
        firebase.firestore().collection(Categorias.contatos).onSnapshot((collection)=>{
            var lista = []
            collection.forEach((doc)=>{
                lista.push(doc.data())
            })
            atualizarLista(lista)
        })
    }
}