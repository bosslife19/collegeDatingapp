import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {useFonts} from 'expo-font'
import * as Font from "expo-font";
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Fontisto } from '@expo/vector-icons';
import StackNavigator from './navigation/StackNavigator';
// import {NavigationContainer} from '@react-navigation/native'
// import  firebase from 'firebase/compat/app'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './screens/Home';
// import { config } from './firebase';
// import Register from './screens/Register';
// import Login from './screens/Login';

// const Stack = createNativeStackNavigator()

const fetchFonts = () => {
  return Font.loadAsync({
    "Geeza-Pro-Bold": require("./assets/fonts/Geeza-Pro-Bold.ttf"),
    
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
 
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  // useEffect(()=>{
    
  //   if(!firebase.apps.length){
  //     firebase.initializeApp(config)
  //   }
  //   else{
  //     firebase.app()
  //   }
  // }, [])
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
    //     <Stack.Screen name='Home' component={Home}/>
    //     <Stack.Screen name='Register' component={Register}/>
    //     <Stack.Screen name='Login' component={Login}/>
    //   </Stack.Navigator>
    // </NavigationContainer>

   <>
    <StackNavigator/>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
