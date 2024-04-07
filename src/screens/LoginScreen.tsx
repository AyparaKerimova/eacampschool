import { StyleSheet, View,Image,Text } from 'react-native';
import React, {useState} from 'react';
import {Input} from '../components/Input'
import { Button } from '../components/Button';
import { colors } from '../../assets/theme/colors';

export function Login() {
    const [userName, setUserName]=useState('')
    const enterAccount=()=>{
        setUserName('')
    }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:'https://eacampschool.com/assets/logos/elshad-agayevs-school-logo.png'}}/>
      <View style={styles.body}>
        <View style={styles.left}>
            <Input placeHolder='Istifadəçi adı'/>
            <Input placeHolder='Parol'/>
            <Button onPress={enterAccount} style={{backgroundColor:colors.lightGreen,width:150,height:40,}}  text='Hesaba giriş'/>
        </View>
        <View style={{flexDirection:'column',gap:10}}>
          <Button text='İstifadəçi adı və ya parolu unutmusunuz?' onPress={enterAccount} style={{color:'red',width:'50%'}}/>
          <Text style={{color:'grey',width:'50%'}}>Sizin brauzerdə cookies qəbul etməyə icazə olmalıdır</Text>
          <Text style={{color:'grey',width:'50%'}}>Bəzi kurslar, ola bilsin ki, qonaqlar üçün açılıb</Text>
          <Button text='Qonaq kimi daxil ol' onPress={enterAccount} style={{color:'black',borderWidth:1,borderColor:colors.lightGrey,width:160,height:40,alignItems:'center',justifyContent:'center'}}/>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:400,
    height:400,
    alignItems:'center',
    gap:40,
    borderColor:colors.lightGrey
  },
  image:{
    width:'40%',
    height:200,
  },
  body:{
    marginLeft:165,
    flexDirection:'row',
    gap:20
  },
  left:{
    gap:20,
    
  }
});
