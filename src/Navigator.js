import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./component/Home";
import GetStarted from "./component/GetStarted";
import Login from "./component/Login";
import Register from "./component/Register";
import Scanner from "./component/Scanner";
import HomeScreen from "./component/HomeScreen";
import Details from "./component/Details";
import ProfileDetails from "./component/ProfileDetail";

const Stack = createStackNavigator();

const Navigator = () => {
   return(
      <NavigationContainer>
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="welcome" component={Home} />
            <Stack.Screen name="Get" component={GetStarted} />
            <Stack.Screen name="Log" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Scanner" component={Scanner} />
            <Stack.Screen name="profileDetails" component={ProfileDetails} />
            <Stack.Screen name="Details" component={Details} />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default Navigator;