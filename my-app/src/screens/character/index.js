import React from 'react';
import { View,Text, TouchableOpacity} from 'react-native';
import Style from '../../utility/appStyle.js';

const CharacterScreen = props => {

    return(
        <View style={Style.container}>
            <Text>DashBoard</Text>
        </View>
    )

}
export const screenOptions = navData => {
    return {
        headerTitle: 'Character'
    }
}
export default CharacterScreen;