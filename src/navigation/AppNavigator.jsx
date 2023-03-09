import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home, PickAccount, QRCode, Splash, Student } from "../pages";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={"Home"} component={Home} />
      <Stack.Screen name={"Splash"} component={Splash} />
      <Stack.Screen name={"PickAccount"} component={PickAccount} />
      <Stack.Screen name={"QRCode"} component={QRCode} />
      <Stack.Screen name={"Student"} component={Student} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
