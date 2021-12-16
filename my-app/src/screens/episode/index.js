import React,{useState,useEffect} from 'react';
import { View,Text, TouchableOpacity,FlatList} from 'react-native';
import Style from '../../utility/appStyle.js';

const EpisodesScreen = props => {

    const [data, setData] = useState([]);
    
    const loadData = async() => {
        const url = 'https://www.breakingbadapi.com/api/episodes';
        const response = await fetch(url,{
            method: 'GET'
        })
        const serverData = await response.json();
        setData(serverData);
    }

    useEffect(() => {
        loadData();
    },[])
    
    return(
        <View style={Style.container}>
            <View>
           <TouchableOpacity onPress={props.navigation.navigate('Season')}>
                <Text style={{fontSize:35}}>ClickMe</Text>
           </TouchableOpacity>
           </View>
        </View>
    )

}
export const screenOptions = navData => {
    return {
        headerTitle: 'Episodes'
    }
}
export default EpisodesScreen;