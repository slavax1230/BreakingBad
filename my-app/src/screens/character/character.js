import React from 'react';
import { View,Text, TouchableOpacity} from 'react-native';
import Style from '../../utility/appStyle.js';

const CharacterScreen = props => {
    const character = props.route.params.characterAssets;
    let color;
    if (character.status  == "Presumed dead"){
         color= "red";
    }
    else{
         color = "blue";
    }
    return(
        
        <View style={Style.container,{backgroundColor:'#cfffff',height:600,alignItems:'center'}}>
            <Text style={{fontSize:40}}>Name: {character.name}</Text>
            <Text style={{fontSize:40}}>BirthDay: {character.birthday}</Text>
            <Text style={{fontSize:40}}>NickName: {character.nickname}</Text>
            <Text style={{backgroundColor:color}}>Status:{character.status }</Text>
        </View>
    )

}
export const screenOptions = navData => {
    return {
        header: 'Character'
    }
}
export default CharacterScreen;