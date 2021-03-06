import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import styles from './styles'

const Header = () => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => {
                console.warn("TESLA")
            }}>
                <Image source={require('../../assets/images/logo.png')} style={styles.logo}/>
            </Pressable>
            <Image source={require('../../assets/images/menu.png')} style={styles.menu}/>
        </View>
    )
}

export default Header
