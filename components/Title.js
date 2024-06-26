import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const Title = ({text}) => {
  return (
    
      <Text style={tw `text-2xl font-bold tracking-wide p-2 text-center`}>{text}</Text>
    
  )
}

export default Title

