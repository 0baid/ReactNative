import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import cars from './cars'
import styles from './styles'
import CarItem from '../CarItem'

const CarList = () => {
    return (
        <View>
            <FlatList
                data={cars}
                renderItem = {({item}) => <CarItem car={item}/>}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').width}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator = {false}
            />
        </View>
    )
}

export default CarList
