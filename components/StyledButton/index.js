import React from 'react'
import { View, Text,Pressable } from 'react-native'
import {styled} from './styled'

const StyledButton = (props) => {
    const backgroundColor = props.primary ? '#171A20CC' : '#ffffffA6'
    // console.log(backgroundColor)
    const textColor = props.primary ? 'white' : 'black'

    return (
        <View style={styled.container}>
            <Pressable style={[styled.button,{backgroundColor:backgroundColor}]} onPress={() => {
                console.warn( props.content + " Pressed")
            }}>
                <Text style={[styled.text ,{ color:textColor}]}>
                    {props.content}
                </Text>
            </Pressable>
        </View>
    )
}

export default StyledButton
