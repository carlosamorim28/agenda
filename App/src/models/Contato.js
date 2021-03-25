import {v4 as uuidv4} from 'uuid'
export default class Contato{
    constructor({nome,id = uuidv4(),numero,linkImagem,email}){
        this.nome = nome
        this.id = id
        this.numero = numero
        this.linkImagem = linkImagem
        this.email = email
    }
}