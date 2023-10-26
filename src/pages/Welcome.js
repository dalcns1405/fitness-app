import React from "react";
import { View,Text, StyleSheet } from "react-native";
import Button from "../components/Button/Button";


function Welcome({navigation}){
    function goToMemberSign(){
        navigation.navigate("MemberSign")
    }
    
    
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Kebap Fitness Salonu</Text>
            <Button onPress={goToMemberSign} title="Üye Kaydı Oluştur"/>
        </View>
      
    )
   

}
export default Welcome;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
    
      

        
    },
    header:{
        textAlign:"center",
        fontSize:28,
        fontWeight:"bold",
        margin:8,
    }


})