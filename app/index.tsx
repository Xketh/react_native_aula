import {useState } from "react";
import { Text, View, StyleSheet, Button} from "react-native";
import ListaProdutos from "./Componentes/Adaptadores/ListaProdutos";
import axios from 'axios';
import {useEffect} from  "react";


export default function Index() {

  let [contador,setContador]= useState(0);
  let [produtos,setProdutos] = useState([]);

  useEffect(()=>{

  carregarProdutos ();

  }, [])

  function carregarProdutos (){

  axios.get ('https://api-docker-2t8m.onrender.com/api/produtos')
  .then((resp)=>{
   setProdutos (resp.data);
  })
  }


  return (
    <View
     style={estilo.container}
    >
      <ListaProdutos produtos={produtos}/>
      
  <Button title= {`Clicado ${contador.toString()}  vezes`} onPress={()=>{ClicarBotao()}}>

</Button>

    <CadastroProduto/>

    </View>
  );

  function ClicarBotao(){
    setContador(contador+1);

  }

}

const estilo= StyleSheet.create ({
  container:{
  flex: 1,
  justifyContent: "center",
  alignItems: "flex-start",
  backgroundColor:"#000000",
  paddingStart:20,
},

text: { 
  color:"#ffffff",
  fontSize: 20,
},
title: { 
  color:"#FA5858",
  fontSize: 50,
  textAlign: "left",
  fontWeight: "bold",
  fontFamily: "chiller",
}
//Documentação do reactive native: reactivenative.dev/docs/layout-props
//Biblioteca para importar componentes react-native-paper.com
//cada componente se comporta de maneira diferente, o react e do react native podem ter o mesmo nome de componente. Quando for pegar uma biblioteca precisa entender o conponente e saber diferencia-los.
//Algumas fontes nao vao ter no Expo Go, precisa ver a documentacao ou incluir a fonte. Algunmas tem no Android e IOS, e tem algumas q nao tem em um e tem no outro. O bom é padronizar tudo ou incluir uma nova fonte.

});