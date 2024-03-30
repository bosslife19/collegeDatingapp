import { StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import {GOOGLE_API_KEY} from '@env'


const LocationScreen = () => {
  const [location, setLocation] = useState("");
  const navigation = useNavigation()
  const [region, setRegion] = useState([
    {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  ]);
  const [coordinates, setCoordinates] = useState([
    {
      latitude: 12.9716,
      longitude: 77.5946,
    },

    {
      latitude: 13.0451,
      longitude: 77.6269,
    },
  ]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let position = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = position.coords;
     
      setRegion({ ...region, latitude, longitude });
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude}, ${longitude}&key=`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.results.length > 0) {
            setLocation(data.results[0].formatted_address);
          }
        })
        .catch((err) => {
          console.log("error fetching location" + err);
        });
    })();
  }, []);

  const handleMarkerDragEnd = (coordinate) => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinate.latitude}, ${coordinate.longitude}&key=AIzaSyBrnYlsmSXdyxSCdY2RzQtQ30E9ABYuAI8`
    )
      .then((res) => res.json())
      .then((data) => {
       

        if (data.results.length > 0) {
          const addressComponents = data?.results[0].address_components;
          let formattedAddress = "";
          for (let component of addressComponents) {
            if (component.types.includes("route")) {
              formattedAddress += component.long_name + ", ";
            }
            if (component.types.includes("sublocality_level_1")) {
              formattedAddress += component.long_name + ", ";
            }
            if (component.types.includes("locality")) {
              formattedAddress += component.long_name += ", ";
            }
          }
          formattedAddress = formattedAddress.trim().slice(0, -1);
          setLocation(formattedAddress);
        }
      })
      .catch((err) => console.log("error fetching the location"));
  };

  const handleNext = () => { 
    navigation.navigate('Gender')
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
              name="location-exit"
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
          Where do you live?
        </Text>

        <MapView
          style={{
            width: "100%",
            height: 450,
            marginTop: 20,
            borderRadius: 5,
          }}
          initialRegion={{
            latitude: 13.0451,
            longitude: 77.6269,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            onDragEnd={(e) => handleMarkerDragEnd(e.nativeEvent.coordinate)}
            draggable
            coordinate={coordinates[1]}
          >
            <View
              style={{
                backgroundColor: "black",
                padding: 12,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 14,
                  fontWeight: "500",
                  color: "white",
                }}
              >
                {location}
              </Text>
            </View>
          </Marker>
        </MapView>

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

export default LocationScreen;

const styles = StyleSheet.create({});
