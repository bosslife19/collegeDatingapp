import {  TextInput } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const Input = (props) => {
let {...others} = props
  return (
    
      <TextInput style={tw `border border-blue-400 rounded px-3 py-2`} {...others}/>
    
  )
}

export default Input