import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import {styles} from './styles';
import StyledButton from '../StyledButton'

const CarItem = (props) => {

  const {name ,tagline, image,taglineCTA} = props;



    return (
        <View style={styles.carContainer}>
          <ImageBackground 
            source={image}
            style={styles.image}
          />
            <View style={styles.titles}>
               <Text style={styles.title}>{name}</Text>
               <Text style={styles.subtitle}>
                  {tagline}
                  {' '}
                  <Text style={styles.taglineCTA}>{taglineCTA}</Text>
                </Text>
               
            </View>

            <View style={styles.buttons}>
              <StyledButton primary={true} content={"custom Order"}/>
              <StyledButton primary={false} content={"existing Inventory"}/>
            </View>
            
        </View>
    )
}

export default CarItem
