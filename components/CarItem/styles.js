import {StyleSheet , Dimensions} from 'react-native'

export const styles = StyleSheet.create({
    carContainer:{
      width: Dimensions.get('screen').width,
      height:Dimensions.get('screen').height
    },
    image:{
      width:'100%',
      height:'100%',
      resizeMode:'cover',
      position:'absolute',
      
    },
  
    titles:{
      marginTop:'30%',
      width:'100%',
      alignItems:'center'
    },
  
    title:{
      fontSize:40,
      fontWeight:'bold',
    },
    subtitle:{
      fontSize:16,
      color:'#5c5362'
    },

    buttons:{
      position:'absolute',
      bottom:80,
      width:'100%',
    },
    resButtons: {
      position:'absolute'

    },
    taglineCTA : {
      textDecorationLine:'underline'
    }
    
  
  });
  