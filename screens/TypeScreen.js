import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const TypeScreen = () => {
  const [type, setType] = useState('')
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
          What's your sexuality?
        </Text>

        <Text style={{ marginTop: 30, fontSize: 15, color: "gray" }}>
          Hinge users are matched based on three gender groups. You can add more
          genders after
        </Text>

        <View style={{marginTop:30, gap:12}}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <Text style={{fontSize:15}}>Straight</Text>
            <TouchableOpacity onPress={() => setType("Straight")}>
              <FontAwesome
                name="circle"
                size={26}
                color={type === "Straight" ? "#581845" : "#F0F0F0"}
              />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <Text style={{fontSize:15}}>Straightsss</Text>
            <TouchableOpacity onPress={() => setType("Straight")}>
              <FontAwesome
                name="circle"
                size={26}
                color={type === "Straight" ? "#581845" : "#F0F0F0"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TypeScreen;

const styles = StyleSheet.create({});
