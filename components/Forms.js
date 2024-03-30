import { View, Text } from 'react-native'
import React, { useState } from 'react'
import FormLabel from './FormLabel'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'
import Input from './Input'
import FormButton from './FormButton'

const FormInputGroup = ({children})=>{

    return (
        <View style={tw `my-3`}>
            {children}
        </View>
    )
}
export default function Forms({signup, onSubmit, errorMessage}) {
 
  const navigation = useNavigation()

  const screen = signup? 'Home' : 'Register';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
  return (
    <View>
      <FormInputGroup>
      {!!errorMessage.errorEmail && <Text style={tw `bg-red-400 p-1 my-2 text-red-700`}>{errorMessage.errorEmail}</Text>}
        <FormLabel text='Email'/>
        <Input onChangeText={(text)=>setEmail(text)} value={email}></Input>
        
      </FormInputGroup>

      <FormInputGroup>
      {!!errorMessage.errorPassword && <Text style={tw `bg-red-400 p-1 my-2 text-red-700`}>{errorMessage.errorPassword}</Text>}
        <FormLabel text='Password'/>
        <Input onChangeText={(text)=>setPassword(text)} value={password} secureTextEntry={true}></Input>
        
      </FormInputGroup>

      <FormButton text={!signup ? 'Login' : 'Register' } primary={true} onPress={()=>onSubmit(email, password)}/>
      <FormButton text={signup? 'Login' : 'Register'} primary={false} onPress={()=>navigation.navigate(screen)}/>

    </View>
  )
}