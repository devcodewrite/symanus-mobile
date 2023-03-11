import React, { useState, FC, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Image, Text } from "react-native-ui-lib";
import { SCREENS } from "../enums";

export default function PickAccount() {
  const nav = useNavigation();
  return (
    <View>
      <Pressable
        onPress={() => nav.dispatch(StackActions.replace(SCREENS.Guardian))}
      >
        <View>
          <Image></Image>
          <Text>Guardian</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => nav.dispatch(StackActions.replace(SCREENS.Teacher))}
      >
        <View>
          <Image></Image>
          <Text>Teacher</Text>
        </View>
      </Pressable>
    </View>
  );
}
