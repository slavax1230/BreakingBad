import React from 'react';
import { View,Text, TouchableOpacity} from 'react-native';
import Style from '../../utility/appStyle.js';

const CharacterScreen = props => {

    const CharScreen = props => {

        const [data,setData] = useState([]);
        const loadData = async() =>{
            const url = 'https://www.breakingbadapi.com/api/characters';
            const response = await fetch(url,{
                method: 'GET'
            })
            const serverData = await response.json();
            setData(serverData)
        }
        
        useEffect(()=>{
            loadData();
        },[])

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