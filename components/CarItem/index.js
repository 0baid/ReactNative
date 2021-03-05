import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import {styles} from './styles';
import StyledButton from '../StyledButton'

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
          <ImageBackground 
            source={require('../../assets/images/ModelS.jpeg')}
            style={styles.image}
          />
            <View style={styles.titles}>
               <Text style={styles.title}>Model S</Text>
               <Text style={styles.subtitle}>Starting at $99,999</Text>
            </View>

            <View style={styles.buttons}>
              <StyledButton primary={true} content={"custom Order"}/>
              <StyledButton primary={false} content={"existing Inventory"}/>
            </View>
            
        </View>
    )
}

export default CarItem
