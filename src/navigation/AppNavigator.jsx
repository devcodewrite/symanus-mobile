import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  Guardian,
  Teacher,
  PickAccount,
  QRCode,
  Splash,
  Student,
  Class,
} from "../pages";
import { SCREENS } from "../enums";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREENS.Splash} component={Splash} />
      <Stack.Screen name={SCREENS.Guardian} component={Guardian} />
      <Stack.Screen name={SCREENS.Teacher} component={Teacher} />
      <Stack.Screen name={SCREENS.PickAccount} component={PickAccount} />
      <Stack.Screen name={SCREENS.QRCode} component={QRCode} />
      <Stack.Screen name={SCREENS.Student} component={Student} />
      <Stack.Screen name={SCREENS.Class} component={Class} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
