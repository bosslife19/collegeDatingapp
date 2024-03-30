import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import React, { useRef, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BirthScreen = () => {
  const navigation = useNavigation();
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleDayChange = (text) => {
    setDay(text);
    if (text.length == 2) {
      monthRef.current.focus();
    }
  };

  const handleMonthChange = (text) => {
    setMonth(text);
    // if (text.length == 2) {
    //   yearRef.current.focus();
    // }
  };

  const handleYearChange = (text) => {
    setYear(text);
  };

  const handleNext = ()=>{
    navigation.navigate("Location")
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
          What's your date of birth?
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginTop: 80,
            justifyContent: "center",
          }}
        >
          <TextInput
            autoFocus={true}
            placeholder="DD"
            maxLength={2}
            keyboardType="numeric"
            value={day}
            style={{
              borderBottomWidth: 1,
              padding: 10,
              borderColor: "black",
              padding: 10,
              width: 60,
              fontSize: day ? 22 : 22,
              fontFamily: "Geeza-Pro-Bold",
            }}
            onChangeText={handleDayChange}
          />

          <TextInput
            ref={monthRef}
            autoFocus={true}
            placeholder="MM"
            maxLength={2}
            keyboardType="numeric"
            value={month}
            style={{
              borderBottomWidth: 1,
              padding: 10,
              borderColor: "black",
              padding: 10,
              width: 60,
              fontSize: month ? 22 : 22,
              fontFamily: "Geeza-Pro-Bold",
            }}
            onChangeText={handleMonthChange}
          />

          <TextInput
            autoFocus={true}
            placeholder="YY"
            maxLength={2}
            keyboardType="numeric"
            value={year}
            style={{
              borderBottomWidth: 1,
              padding: 10,
              borderColor: "black",
              padding: 10,
              width: 50,
              fontSize: year ? 22 : 22,
              fontFamily: "Geeza-Pro-Bold",
            }}
            onChangeText={handleYearChange}
          />
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

export default BirthScreen;

const styles = StyleSheet.create({});
