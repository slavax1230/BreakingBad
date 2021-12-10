import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {flex:1, alignItems: 'center',justifyContent: 'center'},
    containerLogo: {
        //flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        height:'30%',
    },
    containerView:{
      flex:1,
      flexDirection:'row', 
      width:'100%', 
      height:'60%', 
      padding:10, 
      justifyContent:'center', 
      alignItems:'center',
      marginBottom:10,
      backgroundColor:'#ffcff',
      borderRadius:10
    }
})