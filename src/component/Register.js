import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

const Register = () => {
  const navigation = useNavigation();
  const { navigate } = useNavigation();

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <KeyboardAvoidingView
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
          <Text style={{ fontSize: 25 }}>Register</Text>
        </View>
      </View>
      <View style={{ flex: 0.4 }}>
        <TouchableOpacity style={{ width: "100%" }} onPress={pickImage}>
          <View>
            {image ? (
              <View>
                <Image
                  style={{ width: "100%", height: 200 }}
                  source={{ uri: image }}
                />
                <View style={styles.edit}>
                 <Text style={{ color: 'white'}}>Edit Profile Photo </Text> 
                </View>
              </View>
            ) : <View style={{ alignItems: "center" }}>
            <Ionicons name="person-outline" size={100} color="#FE2B4C" />
            <Text style={{ color: "#FE2B4C" }}>Add a Profile Image</Text>
          </View> }
          </View>
          
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.bottom}>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.text}>Full Name</Text>
            <View style={{ width: 200 }}>
              <TextInput style={styles.TextInput} placeholder="Name" />
            </View>
          </View>
          <View style={[styles.input, { textAlign: "left" }]}>
            <Text style={[styles.text]}>Email</Text>
            <View style={{ width: 200 }}>
              <TextInput
                style={[styles.TextInput]}
                placeholder="Email"
                keyboardType="email-address"
              />
            </View>
          </View>
          <View style={[styles.input, { textAlign: "left" }]}>
            <View>
              <Text style={[styles.text]}>Phone Number</Text>
            </View>
            <View style={{ width: 200 }}>
              <TextInput
                style={[styles.TextInput]}
                placeholder="Phone Number"
                keyboardType="phone-pad"
              />
            </View>
          </View>
          <View style={[styles.input, { textAlign: "left" }]}>
            <Text style={[styles.text]}>Role</Text>
            <View style={{ width: 200 }}>
              <TextInput
                style={[styles.TextInput]}
                placeholder="Role"
              />
            </View>
          </View>
          <View style={[styles.input, { textAlign: "left" }]}>
            <Text style={[styles.text]}>Twitter</Text>
            <View style={{ width: 200 }}>
              <TextInput
                style={[styles.TextInput]}
                placeholder="Twitter"
              />
            </View>
          </View>
          <View style={[styles.input, { textAlign: "left" }]}>
            <Text style={[styles.text]}>linkedIn</Text>
            <View style={{ width: 200 }}>
              <TextInput
                style={[styles.TextInput]}
                placeholder="linkedIn"
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigate("Home")}
          style={{ alignItems: "center" }}
        >
          <View style={styles.button}>
            <Text style={{ fontSize: 20 }}>REGISTER</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;

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
    left: 100,
    bottom: 100,
    borderWidth: 2,
    borderColor: 'white',
    width: 160,
    backgroundColor: "grey",
    opacity: 0.5,
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
