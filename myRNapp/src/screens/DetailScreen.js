import React from "react";
import {View,Text, Button} from "react-native";
import {useNavigation,useRoute} from "@react-navigation/native";
import { useSelector } from "react-redux";

export default  DetailScreen=()=>{
    const navigation=useNavigation()
    const route=useRoute()
    const {GeneralResponse}=useSelector(state=>state)
    return(
        <View style={{flex:1,backgroundColor:'dodgerblue',alignItems:'center',justifyContent:'center'}}>
            <Text> Detail Sayfasına Hoşgeldin</Text>
            <Text> Selam {GeneralResponse.name}, senin yaşın {GeneralResponse.age}</Text>
            <Button title="Go Back!" onPress={navigation.goBack()}/>
        </View>
    )
}