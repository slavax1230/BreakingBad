import React from 'react';
import { View,Text, TouchableOpacity} from 'react-native';
import Style from '../../utility/appStyle.js';

const QuotesScreen = props => {

    return(
        <View style={Style.container}>
            <Text>DashBoard</Text>
        </View>
    )

}
export const screenOptions = navData => {
    return {
        headerTitle: 'Quotes'
    }
}
export default QuotesScreen;