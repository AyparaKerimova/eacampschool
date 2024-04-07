import { View, Text, Pressable,StyleSheet,StyleProp, ViewStyle, TouchableOpacity} from 'react-native'
import React from 'react'
import { colors } from '../../assets/theme/colors';

interface IButton{
    style?:StyleProp<ViewStyle>;
    text:string;
    onPress:()=>void

}

export const Button:React.FC<IButton> = ({style,text,onPress}) => {
  return (
    <View >
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.text, style]}> {text}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
      color:colors.white,
      textAlign:'center'
    }
})