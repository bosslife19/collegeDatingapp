import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const DatingType = () => {
  const [datingPreferences, setDatingPreferences] = useState([]);

  const chooseOption = (option) => {
    if (datingPreferences.includes(option)) {
      setDatingPreferences(
        datingPreferences.filter((selectedOption) => selectedOption !== option)
      );
    } else {
      setDatingPreferences((prev) => [...prev, option]);
    }
  }
const navigation = useNavigation()
  const handleNext = ()=>{
    navigation.navigate('LookingFor')
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
          Who do you want to date?
        </Text>

        <Text style={{ marginTop: 30, fontSize: 15, color: "gray" }}>
          Select all the people you're open to meeting
        </Text>

        <View style={{ marginTop: 30, flexDirection: "column", gap: 12 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 15 }}>Men</Text>
            <TouchableOpacity onPress={() => chooseOption("Men")}>
              <FontAwesome
                name="circle"
                size={26}
                color={
                  datingPreferences.includes("Men") ? "#581845" : "#F0F0F0"
                }
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 15 }}>Women</Text>
            <TouchableOpacity onPress={() => chooseOption("Women")}>
              <FontAwesome
                name="circle"
                size={26}
                color={
                  datingPreferences.includes("Women") ? "#581845" : "#F0F0F0"
                }
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 15 }}>Everyone</Text>
            <TouchableOpacity onPress={() => chooseOption("Everyone")}>
              <FontAwesome
                name="circle"
                size={26}
                color={
                  datingPreferences.includes("Everyone") ? "#581845" : "#F0F0F0"
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

export default DatingType;

const styles = StyleSheet.create({});
