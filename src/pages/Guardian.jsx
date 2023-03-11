import React, { useState, FC, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Text } from "react-native-ui-lib";
import { SCREENS } from "../enums";

export default function Guardian() {
  const nav = useNavigation();
  return (
    <View>
      <ActionBar
        actions={[
          { label: "Symanus Mobile", onPress: () => console.log("clicked!") },
          {
            label: "Scan QR",
            onPress: () => nav.dispatch(StackActions.replace(SCREENS.QRCode)),
          },
        ]}
      />
      <Text>Home Page</Text>
    </View>
  );
}
