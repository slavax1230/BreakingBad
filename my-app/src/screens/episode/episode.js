import React from 'react';
import { View,Text, TouchableOpacity} from 'react-native';
import Style from '../../utility/appStyle.js';

const CharScreen = props => {

    return(
        <View style={Style.container}>
            <Text>Character</Text>
        </View>
    )

}
export const screenOptions = navData => {
    return {
        headerTitle: 'Character'
    }
}
export default CharScreen;