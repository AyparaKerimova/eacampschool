import { StyleSheet, View, TextInput } from 'react-native';
import React from 'react';
import { colors } from '../../assets/theme/colors';
interface IInput {
    placeHolder:string;
    
}

export const Input:React.FC<IInput> =({placeHolder})=>{
    return(
        <View style={styles.container}>
            <TextInput style={styles.textinput} placeholder={placeHolder} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:colors.lightGrey,
        width:150,
        height:40
    },
    textinput:{
        marginLeft:10,
        marginTop:10
    }

})