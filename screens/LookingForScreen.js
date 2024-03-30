import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LookingForScreen = () => {
  const [lookingFor, setLookingFor] = useState('')
const navigation = useNavigation()
  const handleNext = ()=>{
    navigation.navigate('HomeTown')
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ marginTop: 90, marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              borderWidth: 2,
              borderColor: "black",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="hearto" size={26} color="black" />
          </View>
          <Image
            style={{ width: 100, height: 40 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/10613/10613685.png",
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            fontFamily: "Geeza-Pro-Bold",
            marginTop: 15,
          }}
        >
          What's your intentions
        </Text>

        <View style={{marginTop:30, gap:12}}>
        <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 15 }}>Life Partner</Text>
            <TouchableOpacity onPress={() => setLookingFor("Life Partner")}>
              <FontAwesome
                name="circle"
                size={26}
                color={
                  lookingFor==='Life Partner'? "#581845" : "#F0F0F0"
                }
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 15 }}>Long-term relationship</Text>
            <TouchableOpacity onPress={() => setLookingFor("Long-term relationship")}>
              <FontAwesome
                name="circle"
                size={26}
                color={
                  lookingFor==='Long-term relationship'? "#581845" : "#F0F0F0"
                }
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 15 }}>Long-term relationship open to short</Text>
            <TouchableOpacity onPress={() => setLookingFor("Long-term relationship open to short")}>
              <FontAwesome
                name="circle"
                size={26}
                color={
                  lookingFor==='Long-term relationship open to short'? "#581845" : "#F0F0F0"
                }
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 15 }}>Short-term relationship open to long</Text>
            <TouchableOpacity onPress={() => setLookingFor("Short-term relationship open to long")}>
              <FontAwesome
                name="circle"
                size={26}
                color={
                  lookingFor==='Short-term relationship open to long'? "#581845" : "#F0F0F0"
                }
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 15 }}>Short-term relationship</Text>
            <TouchableOpacity onPress={() => setLookingFor("Short-term relationship")}>
              <FontAwesome
                name="circle"
                size={26}
                color={
                  lookingFor==='Short-term relationship'? "#581845" : "#F0F0F0"
                }
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 15 }}>Figuring out my dating intentions</Text>
            <TouchableOpacity onPress={() => setLookingFor("Figuring out my dating intentions")}>
              <FontAwesome
                name="circle"
                size={26}
                color={
                  lookingFor==='Figuring out my dating intentions'? "#581845" : "#F0F0F0"
                }
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            marginTop: 30,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <AntDesign name="checksquare" size={26} color="#581845" />
          <Text style={{ fontSize: 15 }}>Visible on profile</Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{ marginTop: 30, marginLeft: "auto" }}
          onPress={handleNext}
        >
          <MaterialCommunityIcons
            style={{ alignSelf: "center", marginTop: 20 }}
            name="arrow-right-circle"
            size={45}
            color="#581845"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LookingForScreen;

const styles = StyleSheet.create({});
