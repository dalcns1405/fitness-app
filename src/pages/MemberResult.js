import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function MemberResult({route}){

    const {user} = route.params;

    return(
        <SafeAreaView>
            <Text style={styles.message}>Kayıt Basarılı !!</Text>
            <Text style={styles.label}>Üye Adı :{user.name}</Text>
            <Text style={styles.label}>Üye Soyadı: {user.surname} </Text>
            <Text style={styles.label}>Üye Yaşı:{user.age} </Text>
            <Text style={styles.label}>Üye E-mail adresi: {user.mail} </Text>

        </SafeAreaView>
    )

}
export default MemberResult;

const styles=StyleSheet.create({
    label:{
        fontWeight:"bold",
        fontSize:20,
        margin:5

    },
    message:{
        fontWeight:"bold",
        fontSize:30,
        textAlign:"center",
        color:"red"
    }

})