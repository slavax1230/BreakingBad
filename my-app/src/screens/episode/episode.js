import React from 'react';
import { View,Text, TouchableOpacity} from 'react-native';
import Style from '../../utility/appStyle.js';

const SeasonScreen = props => {

    return(
        <View style={Style.container}>
            <Text>123123</Text>
        </View>
    )

}
export const screenOptions = navData => {
    return {
        headerTitle: 'Epi'
    }
}
export default SeasonScreen;