import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'

const BasicInfo = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={tw `flex-1 bg-white`}>
      <View style={{marginTop: 80, paddingHorizontal:5}}>
        <Text style={[tw `font-bold text-3xl mt-10 `,{fontFamily:'Geeza-Pro-Bold',}]}>You're one of a kind </Text>
        <Text style={[tw `font-bold text-3xl mt-10`,{fontFamily:'Geeza-Pro-Bold',}]}>Your profile should be too</Text>
      </View>

      <View>
        <LottieView style={styles.lottie} source={require("../assets/love.json")}
          autoPlay
          loop={true}
          speed={0.7}
        />
      </View>

      <TouchableOpacity 
      onPress={()=>navigation.navigate("Name")}
      style={{backgroundColor: '#900C3F', padding:15, marginTop:'auto'}}>
        <Text style={{textAlign:'center', color:'white', fontWeight:'600',fontSize:15}}>Enter Basic Info</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default BasicInfo

const styles = StyleSheet.create({
  lottie:{
    height:260,
    width:300,
    alignSelf:'center',
    marginTop:40,
    justifyContent:'center'
  }
})