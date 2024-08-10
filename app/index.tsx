import { Text, View, StyleSheet} from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
      }}
    >
      <Text style={{color:"#ffffff"}}> Texto que eu quiser </Text>
    </View>
  );
}

const estilo= StyleSheet.create ({
  container:{
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor:"#000000",
},
text: { 
  color: "#ffffff"
}
});
