import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { QRCode } from 'react-native-custom-qr-codes-expo'

const HomeScreen = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.Top}>
        <View style={styles.logo}>
          <Image
            style={styles.Logo}
            source={require("../../assets/Logo1.png")}
          />
        </View>
        <Ionicons onPress={()=>navigate('profileDetails')}
          style={{ right: 20 }}
          name="person-outline"
          size={30}
          color="white"
        />
      </View>
      <View style={styles.code}>
        <View style={styles.codeInner}>
          <View style={{marginVertical: 30}}>
            <Text>Exchange Contact Information</Text>
            <Text style={{ color: "grey" }}>
              Scan this QR code to share your contacts
            </Text>
          </View>
         <View style={styles.Qrcode}>
         <QRCode content={JSON.stringify({
           name: "Isaac",
           twitter: "",
         })

         } />
         </View>
          <View style={{ alignItems: "center" }}>
            <View style={styles.profile}>
              <View style={styles.profileLogo}>
                <Image
                  style={{ flex: 0.7, width: "100%", height: '100%', borderRadius: 100, }}
                  source={require("../../assets/pro.png")}
                />
              </View>
              <View style={{marginHorizontal: 10}}>
                <Text style={{marginVertical: 10}}>John Smith</Text>
                <Text>Head of Marketing</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.scan}>
         <View style={styles.scanInner}>
         <Text>Want to add new connection?</Text>
         <TouchableOpacity onPress={() => navigate("Scanner")}
          style={{borderWidth: 2, borderColor: '#FE2B4C', marginHorizontal: 10}}>
            <Text style={{marginHorizontal: 10}}>Scan QR</Text>
         </TouchableOpacity>
         </View>
      </View>
    </View>
  );
};

export default HomeScreen;

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
  logo: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  Logo: {
    flex: .5, 
    width: "50%", 
    height: 100, 
  },
  code: {
    flex: 1,
  },
  codeInner: {
    marginHorizontal: 30,
    marginVertical: 20,
  },
  Qrcode:{
    alignItems: "center",
    justifyContent: "center",
  },

  profile: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
    width: "100%",
    height: 100,
  },
  profileLogo: {
    width: "20%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  scan: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderColor: 'grey',
   },
   scanInner: {
     flexDirection: "row",
  }
});
