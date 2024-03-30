import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'


export default function Layout({children}) {
  return (
    <View style={tw `flex-1 bg-white items-center justify-center w-full`}>

        {children}
        
    </View>
  )
}