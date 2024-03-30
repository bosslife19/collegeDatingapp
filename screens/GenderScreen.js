import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const GenderScreen = () => {
  const [gender, setGender] = useState("");
  const navigation = useNavigation()
  const handleNext = ()=>{
    navigation.navigate('Type')
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
            <MaterialCommunityIcons
              name="cake-variant-outline"
              size={26}
              color="black"
            />
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
          What is your Gender?
        </Text>

        <Text style={{ marginTop: 30, fontSize: 15, color: "gray" }}>
          Hinge users are matched based on three gender groups. You can add more
          genders after
        </Text>

        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "500" }}>Men</Text>
            <TouchableOpacity onPress={() => setGender("Male")}>
              <FontAwesome
                name="circle"
                size={26}
                color={gender === "Male" ? "#581845" : "#F0F0F0"}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom:12
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "500" }}>Female</Text>
            <TouchableOpacity onPress={() => setGender("Female")}>
              <FontAwesome
                name="circle"
                size={26}
                color={gender === "Female" ? "#581845" : "#F0F0F0"}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop:30, flexDirection:'row', alignItems:'center', gap:8}}>
          <AntDesign name='checksquare' size={26} color={gender && '#581845'}/>
          <Text style={{fontSize:15}}>Visible on profile</Text>
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

export default GenderScreen;

const styles = StyleSheet.create({});
