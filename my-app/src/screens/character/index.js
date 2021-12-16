import React,{useState,useEffect} from 'react';
import { View,Text, TouchableOpacity,Image,FlatList} from 'react-native';
import Style from '../../utility/appStyle.js';

const CharactersScreen = props => {

        const [data, setData] = useState([]);
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
            <View name='mylogo' style={Style.containerLogo}>
                <Image 
                style={{width:'30%',height:'100%',borderRadius:28}} 
                source={{uri:'https://hyperpix.net/wp-content/uploads/2020/04/breaking-bad-logo-font-free-download.jpg'}}
                />
            </View>
            <View style={{height:'10%'}}><Text style={{fontSize:35}}>Characters</Text></View>
            <View name='characterView' style={{flex:1,width:'100%',height:120,justifyContent:'center', alignItems:'center'}}>
            <FlatList
            data={data}
            keyExtractor={item => item.char_id}
            renderItem={character => 
                <TouchableOpacity onPress={()=>{props.navigation.navigate('Character',{characterAssets:character.item})}}>
                    <View style={Style.containerView}>
                        <View name='charimage' style={{ width:'18%', height: 100}}>
                        <Image
                        style={{width:80,height:100}}
                        source={{uri:character.item.img}}
                        />
                        </View>
                        <View name='description' style={{flex:2,width:'75%',height:100,padding:18}}>
                            <Text style={{fontSize:35,color:'#3fc',marginTop:20}}>
                                {character.item.name}
                            </Text>
                            <Text>
                                {character.item.nickname}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            }
            />
            </View>
        </View>
    )
}

export const screenOptions = navData => {
    return {
        headerTitle: 'Characters'
    }
}

export default CharactersScreen;