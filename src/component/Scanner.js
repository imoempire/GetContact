import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from "@react-navigation/native";

const Scanner = () => { 
  const {navigate} = useNavigation();

const [hasPermission, setHasPermission] = useState(null);
const [scanned, setScanned] = useState(false);

useEffect(() => {
  (async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  })();
}, []);

const handleBarCodeScanned = ({ type, data }) => {
  setScanned(true);
  navigate("Details", { data })
};

if (hasPermission === null) {
  return <Text>Requesting for camera permission</Text>;
}
if (hasPermission === false) {
  return <Text>No access to camera</Text>;
}

  return (
    <View style={styles.container}>
      <View style={styles.Top}>
      <View style={styles.barScanner}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      </View>
      {scanned && <TouchableOpacity title={'Tap to Scan Again'} onPress={() => setScanned(false)}></TouchableOpacity>}
      </View>
      <View style={styles.scan}>
         <View style={styles.scanInner}>
         <Text>Want to share your contact?</Text>
         <TouchableOpacity onPress={()=>navigate('Home')} style={{borderWidth: 2, borderColor: '#FE2B4C', marginHorizontal: 10}}>
            <Text style={{marginHorizontal: 10}}>Send QR</Text>
         </TouchableOpacity>
         </View>
      </View>
    </View>
  );
};

export default Scanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  // Top Styling(logo)
  Top: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  barScanner: {
    flex: .6,
    width: "90%",
    height: "100%",
    borderWidth: 2,
    borderColor: "white",
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
