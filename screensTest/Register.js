import { Text, View, } from 'react-native'
import React, {useState} from 'react'
import tw from 'tailwind-react-native-classnames'
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
import Title from '../components/Title'
import Forms from '../components/Forms'
import Layout from './Layout'
import axios from 'axios'
import {BASE_URL} from '@env'
import * as Device from 'expo-device'
export default function Register() {
    const [errorMessage, setError] = useState({errorEmail: '', errorPassword: ''});
    const [successMessage, setSuccess] = useState('')
    const register = (email, password)=>{
        
        // if(!email && !password)
        // alert('Enter all the required fields you bastard!')
        // else{
            
        //     firebase.auth().
        //     createUserWithEmailAndPassword(email.trim(), password)
        //     .then(user=>{
        //         setSuccess('User Registered successfully')
        //         setError('');
                
        //     }).catch(err=>setError(err.message))
        // }

        if(!email && !password){
            alert('Please enter your credentials')
        }
       else{
       
        
        axios.post(`${BASE_URL}/api/register`, {email: email, password: password, deviceName: Device.modelName}).then(res=>{
          if(res.data.status){
            setError({errorEmail: '', errorPassword: ''});
            setSuccess("Registration Successfull")
            
          }
          else{
            
            
            let errorEmailMsg = res.data.messages.email? res.data.messages.email[0] : ''
            let errorPassMsg = res.data.messages.password? res.data.messages.password[0]: ''

            setError({errorEmail: errorEmailMsg, errorPassword: errorPassMsg})
            
          }
        }).catch(error=>console.log(error.message))
       }
    }
  return (
    <Layout>
        <View style={tw `w-3/4`}>
        <Title text='Register'/>
        
        {!!successMessage && <Text style={tw `bg-green-400 p-1 my-2 text-green-700`}>{successMessage}</Text>}
        <Forms signup={true} onSubmit={register} errorMessage={errorMessage}/>
      
        </View>
        
    </Layout>
  )
}