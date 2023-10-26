import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {  StyleSheet, View } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button"
import { Alert } from "react-native";



function MemberSign({navigation}){

    const [name, setName] = useState(null);
    const [surname, setSurname] = useState(null);
    const [age, setAge] = useState(null);
    const [mail, setMail] = useState(null);

    function handleSubmit(){
        const user ={
          name,
          surname,
          age,
          mail
        };

        if (!name || !surname || !age|| !mail){
            
            Alert.alert("Kebap Fitness Salonu","Bilgiler Boş Bırakılmaz!!") ;
            return;
          
           
            
        }

        navigation.navigate("MemberResult",{user})
    }

    return(
        <SafeAreaView style={styles.container}>
            <Input label="Ad" placeholder="Üyenin ismini giriniz.." onChangeText={setName}/>
            <Input label="Soyad" placeholder="Üyenin soyadını giriniz.." onChangeText={setSurname}/>
            <Input label="Yaş" placeholder="Üyenin yaşını giriniz.." onChangeText={setAge}/>
            <Input label="E-posta adresi" placeholder="Üyenin e-posta adresini giriniz.." onChangeText={setMail}/>
           
          
            <Button title="Kaydı Tamamla" onPress={handleSubmit} />

        </SafeAreaView>
    )

}
export default MemberSign;

const styles=StyleSheet.create({
    container:{
        flex:1,
     

    }

})