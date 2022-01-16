import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Entypo,
  EvilIcons,
  Fontisto,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProfileDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.Top}>
        <View>
          <View
            style={{
              width: "70%",
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ flexDirection: "row", left: 10 }}
            >
              <MaterialIcons
                name="keyboard-backspace"
                size={35}
                color="black"
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 25 }}>My Profile</Text>
          </View>
        </View>
      </View>
      <View style={styles.code}>
        <View style={styles.codeInner}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.profile}>
              <View style={styles.profileLogo}>
                <Image
                  style={{
                    flex: 0.7,
                    width: "100%",
                    height: "100%",
                    borderRadius: 100,
                  }}
                  source={require("../../assets/logo.jpg")}
                />
              </View>
              <View style={{ marginHorizontal: 10 }}>
                <Text style={{ marginVertical: 10 }}>John Smith</Text>
                <Text>Head of Marketing</Text>
              </View>
            </View>
          </View>
          {/* Social */}
          <View style={{ flexDirection: "row" }}>
            <View>
              <Entypo name="twitter-with-circle" size={40} color="black" />
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <Entypo name="linkedin-with-circle" size={40} color="black" />
            </View>
          </View>
          {/* Contact */}
          <View style={{ marginVertical: 30 }}>
            {/* item */}
            <View style={{ flexDirection: "row" }}>
              <View>
                <Feather name="phone" size={24} color="black" />
              </View>
              <View style={[{ marginHorizontal: 10 }, styles.text]}>
                <Text>+233 578 016 840</Text>
              </View>
            </View>
            {/* item */}
            <View style={{ flexDirection: "row", marginVertical: 10 }}>
              <View>
                <Fontisto name="email" size={24} color="black" />
              </View>
              <View style={[{ marginHorizontal: 10 }, styles.text]}>
                <Text>isaac@gmail.com</Text>
              </View>
            </View>
            {/* item */}
            <View style={{ flexDirection: "row", marginVertical: 10 }}>
              <View>
                <Entypo name="twitter-with-circle" size={24} color="black" />
              </View>
              <View style={[{ marginHorizontal: 10 }, styles.text]}>
                <Text>@isaac-imo</Text>
              </View>
            </View>
            {/* item */}
            <View style={{ flexDirection: "row", marginVertical: 10 }}>
              <View>
              <Entypo name="linkedin-with-circle" size={24} color="black" />
              </View>
              <View style={[{ marginHorizontal: 10 }, styles.text]}>
                <Text>www.linkedin.com/in/isaac-obeng-9980a9217/</Text>
              </View>
            </View>
            {/* item */}
            <View style={{ flexDirection: "row", marginVertical: 10 }}>
              <View>
                <EvilIcons name="location" size={30} color="black" />
              </View>
              <View style={[{ marginHorizontal: 10 }, styles.text]}>
                <Text>Accra Ghana</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  // Top Styling(logo)
  Top: {
    flex: 0.19,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FE2B4C",
  },

  logos: {
    flex: 0.5,
    width: "60%",
    height: 100,
    color: "white",
  },
  code: {
    flex: 1,
    marginVertical: 20,
  },
  codeInner: {
    marginHorizontal: 30,
  },

  profile: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: 100,
  },
  profileLogo: {
    width: "22%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
  },
});
