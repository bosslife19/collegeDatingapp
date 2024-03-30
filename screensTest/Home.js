import { View, Text } from 'react-native'
import React, {useState} from 'react'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";


import tw from 'tailwind-react-native-classnames'
import Title from '../components/Title'
import axios from 'axios';
import Forms from '../components/Forms'
import * as Device from 'expo-device'
import {BASE_URL} from '@env'
import Layout from './Layout'

export default function Home() {
  const [errorMessage, setError] = useState({errorEmail: '', errorPassword: ''});
  const [successMessage, setSuccess] = useState('')
  const [error, setErrorM] = useState("");


  const login = (email, password)=>{
    if(email && password){
      
      
    //   firebase.auth().signInWithEmailAndPassword(email.trim(), password)
    // .then (user=>{
    //   setSuccess('User Logged in successfully ' + user.user.uid);
    //   setError("");
    // }).catch(err=>setError(err.message))

    axios.post(`${BASE_URL}/api/login`, {email: email, password: password, deviceName: Device.modelName}).then(res=>{
      if(res.data.status){
        setError({errorEmail: '', errorPassword: ''});
        setSuccess("Login Successfull")
        
      }
      else{
        
        
        let errorEmailMsg = res.data.messages.email? res.data.messages.email : ''
        let errorPassMsg = res.data.messages.password? res.data.messages.password: ''

        setError({errorEmail: errorEmailMsg, errorPassword: errorPassMsg})
        
      }
    }).catch(error=>console.log(error.message))
    }else{
      alert('Mumu boy put your credentials na Ewu!')
    }
    
  }
  return (
    <Layout>
        <View style={tw `w-3/4`}>
        <Title text='Login'/>
        {error && <Text style={tw `bg-red-400 p-1 my-2 text-red-700`}>{error}</Text>}
        {!!errorMessage.errorEmail && <Text style={tw `bg-red-400 p-1 my-2 text-red-700`}>{errorMessage.errorEmail}</Text>}
        {!!errorMessage.errorPassword && <Text style={tw `bg-red-400 p-1 my-2 text-red-700`}>{errorMessage.errorPassword}</Text>}
        {!!successMessage && <Text style={tw `bg-green-400 p-1 my-2 text-green-700`}>{successMessage}</Text>}
        <Forms signup={false} onSubmit={login} errorMessage={errorMessage}/>
        </View>
        
    </Layout>
  )
}