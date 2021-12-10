import React from 'react';
import { View,Text, TouchableOpacity} from 'react-native';
import Style from '../../utility/appStyle.js';

const CharacterScreen = props => {
    const character = props.route.params.characterAssets;
    return(
        
        <View style={Style.container}>
            <Text>asdasd</Text>
        </View>
    )

}
export const screenOptions = navData => {
    return (
        <View>
            
        </View>
    )
}
export default CharacterScreen;