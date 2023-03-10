import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

<<<<<<< HEAD
import { Home, PickAccount, QRCode, Splash, Student } from "../pages";
=======
import { Home, Splash } from "../pages";
>>>>>>> 7ee704bc9ba97792a67109102b3d1e1685a7ee4f

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={"Home"} component={Home} />
      <Stack.Screen name={"Splash"} component={Splash} />
<<<<<<< HEAD
      <Stack.Screen name={"PickAccount"} component={PickAccount} />
      <Stack.Screen name={"QRCode"} component={QRCode} />
      <Stack.Screen name={"Student"} component={Student} />
=======
>>>>>>> 7ee704bc9ba97792a67109102b3d1e1685a7ee4f
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
