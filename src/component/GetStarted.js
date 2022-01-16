import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GetStarted = () => {
   const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={{ flex: 1, width: "100%", height: "100%" }}
          source={require("../../assets/hero.png")}
        />
      </View>
      <View style={styles.Texts}>
        <View style={styles.Text}>
          <Text style={styles.text}>KEEP IN TOUCH WITH THE PEOPLE OF</Text>
          <Text style={styles.text}>AMPERSAND</Text>
          <Text style={{ color: "grey", marginVertical: 5, }}>
            sign in or register with your Ampersand email
          </Text>
        </View>
      </View>
      <View style={styles.button}>
        <View>
          <TouchableOpacity onPress={() => navigate("Register")} style={{ borderBottomWidth: 2 , borderBottomColor: '#C58675'}}>
            <Text style={{ fontSize: 17 }}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigate("Log")} style={{ borderBottomWidth: 2 , borderBottomColor: '#C58675'}}>
            <Text style={{ fontSize: 17 }}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  // Top Styling(logo)
  logo: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 100,
  },
  Texts: {
    flex: 0.5,
  },
  Text: {
    width: "100%",
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "400",
  },
  button: {
    flex: 0.5,
    width: "80%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  line: {
    width: 90,
    height: 2,
    backgroundColor: "#C58675",
  },
  line2: {
   width: 70,
   height: 2,
   backgroundColor: "#C58675",
 },
});
