import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

export default function FormButton(props) {
    let { text,  primary, ...others} = props
    let primaryStyling = tw `bg-blue-500  px-6 py-3 my-3  rounded`;
    let secondaryStyling= tw `border-blue-500 border bg-transparent px-6 py-2 rounded py-3 my-3`
    let primaryText= tw `text-center text-white font-bold`
    let secondaryText = tw `text-center text-blue-300 font-bold`
  return (
    <TouchableOpacity style={primary? primaryStyling: secondaryStyling} {...others}>
      <Text style={primary? primaryText: secondaryText}>{text}</Text>
    </TouchableOpacity>
  )
} 