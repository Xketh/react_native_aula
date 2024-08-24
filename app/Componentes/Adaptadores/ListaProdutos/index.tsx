import React from "react";
import { ScrollView, View } from "react-native";
import ItemProduto from "../ItemProduto";
import Style from "@/app/Style/Default";

function ListaProdutos ({produtos}:
    {produtos: {id:number, nome:string, preco:number} []}){
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
