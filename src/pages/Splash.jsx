import { StackActions, useNavigation } from "@react-navigation/native";
import React, { useState, FC, useEffect } from "react";
import { View, Text } from "react-native-ui-lib";
import { SCREENS } from "../enums";

export default function Splash() {
  const nav = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      nav.dispatch(StackActions.replace(SCREENS.PickAccount));
    }, 2000);
  }, []);
  return (
    <View flex centerV>
      <Text text40 center>
        Symanus
      </Text>
    </View>
  );
}
