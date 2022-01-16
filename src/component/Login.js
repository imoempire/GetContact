import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const { navigate } = useNavigation();

  return (
    <View
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.header}>
        <View
          style={{
            width: "60%",
            marginTop: 30,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ flexDirection: "row", left: 10 }}
          >
            <MaterialIcons name="keyboard-backspace" size={35} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 25 }}>Sign In</Text>
        </View>
      </View>
      <View style={{ flex: 0.4 }}>
        <View style={{ width: "100%" }}>
          <View style={{ alignItems: "center" }}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/login.jpg")}
            />
          </View>
        </View>
      </View>

      <ScrollView style={styles.bottom}>
        <View style={styles.form}>
          <View style={[styles.input, { textAlign: "left" }]}>
            <Text style={[styles.text]}>Email</Text>
            <View style={{ width: 200 }}>
              <TextInput style={[styles.TextInput]} placeholder="Email" />
            </View>
          </View>
          <View style={[styles.input, { textAlign: "left" }]}>
            <View>
              <Text style={[styles.text]}>Password</Text>
            </View>
            <View style={{ width: 200 }}>
              <TextInput
                style={[styles.TextInput]}
                secureTextEntry={true}
                placeholder="Phone Number"
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigate("Home")}
          style={{ alignItems: "center" }}
        >
          <View style={styles.button}>
            <Text style={{ fontSize: 20 }}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  // Top Styling(logo)
  header: {
    flex: 0.2,
    backgroundColor: "#FE2B4C",
  },
  edit: {
    alignItems: "center",
    padding: 9,
    color: "white",
    fontSize: 15,
    left: 100,
    bottom: 150,
    borderWidth: 2,
    borderColor: "white",
    width: 160,
    backgroundColor: "grey",
  },
  bottom: {
    flex: 1,
  },
  form: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flexDirection: "row",
    marginVertical: 16,
    borderBottomWidth: 0.6,
    borderColor: "grey",
  },
  text: {
    fontSize: 15,
    width: 120,
  },
  TextInput: {
    fontSize: 15,
    textAlign: "right",
  },
  button: {
    backgroundColor: "#FE2B4C",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    width: "90%",
    height: 50,
    borderRadius: 5,
  },
});
