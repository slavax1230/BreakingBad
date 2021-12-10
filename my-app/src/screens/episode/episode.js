import React from 'react';
import { View,Text, TouchableOpacity} from 'react-native';
import Style from '../../utility/appStyle.js';

const EpisodeScreen = props => {

    return(
        <View style={Style.container}>
            <Text>Character</Text>
        </View>
    )

}
export const screenOptions = navData => {
    return {
        headerTitle: 'Epi'
    }
}
export default EpisodeScreen;