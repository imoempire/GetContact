import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const Home = () => {

   const { navigate } = useNavigation();

   return (
      <View style={styles.container}>
         <View style={styles.logo}>
            <Image style={{ flex: .35, width: "70%", height: 100,}} source={require('../../assets/Logo.png')} />
         </View>
         <View style={styles.name}>
            <Text style={styles.text}>AMPERSAND</Text>
            <Text style={styles.text}>CONTACT</Text>
         </View>
         <View style={styles.button}>
            <TouchableOpacity onPress={() => navigate("Get")} style={{ borderBottomWidth: 2 , borderBottomColor: '#C58675'}}>
            <Text style={{fontSize: 20, lineHeight: 20, }}>Get Started</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}

export default Home

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
   },
   // Top Styling(logo)
   logo: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 100,
   },
   name: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
   },
   text: {
      fontSize: 24,
   },
   button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   line:{
      width: 120,
      height: 2,
      backgroundColor: 'red'
   }
})
