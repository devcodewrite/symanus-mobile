import { React, useState, FC, useEffect } from "react";
import { useNavigation, StackActions } from "@react-navigation/native";
import { Text, View } from "react-native";
import { SCREENS } from "../enums";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActionBar } from "react-native-ui-lib";
import { StyleSheet } from "react-native";

export default function Guardian() {
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Home Page</Text>
      </View>
      <ActionBar
        actions={[
          { label: "Symanus Mobile", onPress: () => console.log("clicked!") },
          {
            label: "Scan QR",
            onPress: () => nav.dispatch(StackActions.replace(SCREENS.QRCode)),
          },
        ]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});