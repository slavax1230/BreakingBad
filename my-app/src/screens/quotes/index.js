import React,{useState,useEffect} from 'react';
import { View,Text, TouchableOpacity, FlatList} from 'react-native';
import Style from '../../utility/appStyle.js';

const QuotesScreen = props => {

    const [data, setData] = useState([]);
    
    const loadData = async() => {
        const url = 'https://www.breakingbadapi.com/api/quotes';
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
            <FlatList
            data={data}
            KeyExtractor={item => item.quote_id}
            renderItem={quotes => 
                <View>
                <Text style={{fontSize:25,backgroundColor:'#6ccf',borderRadius:15,alignItems:'center',textAlign:'center'}}>{quotes.item.quote}</Text>
                <Text style={{color:'#f44'}}>Who said?{quotes.item.author}</Text>
                </View>
            }
            />
        </View>
    )

}
export const screenOptions = navData => {
    return {
        headerTitle: 'Quotes'
    }
}
export default QuotesScreen;