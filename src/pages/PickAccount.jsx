import React, { useState, FC, useEffect } from "react";
import { StackActions, useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Image, Text, Colors } from "react-native-ui-lib";
import { SCREENS } from "../enums";

export default function PickAccount() {
  const nav = useNavigation();
  return (
    <View flex center>
      <Pressable
        style={{
          marginBottom: 5,
          height: 100,
          width: 100,
          borderRadius: 5,
          borderColor: Colors.green20,
          backgroundColor: Colors.white,
          alignContent: "center",
        }}
        onPress={() => nav.navigate(SCREENS.Guardian)}
      >
        <Text center>Guardian</Text>
      </Pressable>
      <Pressable
        style={{
          height: 100,
          width: 100,
          marginTop: 5,
          borderRadius: 5,
          borderColor: Colors.green20,
          backgroundColor: Colors.white,
        }}
        onPress={() => nav.navigate(SCREENS.Teacher)}
      >
        <Text>Teacher</Text>
      </Pressable>
    </View>
  );
}
