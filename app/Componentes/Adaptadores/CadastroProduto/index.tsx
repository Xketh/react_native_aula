import { useState } from 'react'
import {Text, TextInput, View} from 'react-native'



const CadastroProduto = ()=> {
    let [nome,setNome] = useState (''),
    let [descricao,setDescricao] = useState (''),

    return (

        <View>

            <Text> Nome: </Text>
            <TextInput onChangeTex={setNome}> value = {nome} </TextInput>

            <Text> Descricao: </Text>
            <TextInput onChangeTex={setDescricao}> value = {descricao} </TextInput>

        </View>

    )

}