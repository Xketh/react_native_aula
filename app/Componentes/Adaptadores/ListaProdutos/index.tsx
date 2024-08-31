import React from "react";
import { ScrollView, View } from "react-native";
import ItemProduto from "../ItemProduto";
import Style from "@/app/Style/Default";
import Produto from "@/app/Models/Produto";

    interface PropListaProduto{
        
       produtos: Produto [];
    }

        const ListaProdutos:React.FC<PropListaProduto>=({produtos})=>{

            
        return (
    
            <ScrollView>
            <View style={Style.container}>
            
            {produtos.map((p)=>
            
            <ItemProduto produto={p} key= {p.id}> 
            
            </ItemProduto> )}
            
            </View> 
    
            </ScrollView>)

        }

            export default ListaProdutos
