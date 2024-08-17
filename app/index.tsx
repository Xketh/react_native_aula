import { useState } from "react";
import { Text, View, StyleSheet, Button} from "react-native";

const produtos = [

  {id: 1, nome: "Coca-cola", preco: 5.5},
  {id: 2, nome: "Sukita", preco: 5.5},
  {id: 3, nome: "Guarana Jesus", preco: 5.5},
  {id: 4, nome: "Dolly", preco: 5.5},
];


export default function Index() {

  let [contador,setContador]= useState(0);


  return (
    <View
     style={estilo.container}
    >
      {produtos.map((p)=>(

        <View key={p.id}>
          
        <Text style= {estilo.title}>{p.nome}</Text>
        <Text style= {estilo.text}>{p.preco}</Text>
        </View>

       )
      )}
  <Button title= {`Clicado ${contador.toString()} vezes`} onPress={()=>{ClicarBotao()}}>

</Button>
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
  alignItems: "flex-Start",
  backgroundColor:"#000000",
  paddingStar:20,
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