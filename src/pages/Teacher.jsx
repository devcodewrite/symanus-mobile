import React, { useState, FC, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActionBar, Colors } from "react-native-ui-lib";
import { FlatList } from "react-native-gesture-handler";
import { ClassCard } from "../components";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../enums";

export default function Teacher() {
  const nav = useNavigation();
  const [classes, setClasses] = useState([
    { school: "Tiny Tots International", class: "12", location: "Tema" },
    { school: "Tiny Tots International", class: "14", location: "Tema" },
    { school: "Tiny Tots International", class: "15", location: "Tema" },
  ]);
  return (
    <View style={styles.container}>
      <ActionBar
        actions={[
          {
            label: "Symanus Mobile",
            text60: true,
            color: Colors.black,
            onPress: () => console.log("clicked!"),
          },
          { label: "Scan QR", onPress: () => nav.navigate(SCREENS.QRCode) },
        ]}
      />
      <FlatList
        style={{ padding: 20, flex: 1, width: "100%", marginTop: 20 }}
        data={classes}
        renderItem={({ item, index }) => (
          <ClassCard item={item} index={index} />
        )}
      />
    </View>
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
