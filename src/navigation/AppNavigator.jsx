import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home, Splash } from "../pages";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={"Home"} component={Home} />
      <Stack.Screen name={"Splash"} component={Splash} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
