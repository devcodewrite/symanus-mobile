import React, { useState, FC, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActionBar, Colors } from "react-native-ui-lib";
import { FlatList } from "react-native-gesture-handler";
import { StudentCard } from "../components";
import { SCREENS } from "../enums";
import { useNavigation } from "@react-navigation/native";

export default function Guardian() {
  const nav = useNavigation();
  const [students, setStudents] = useState([
    { name: "Emmanuella Somako", school: "Tiny Tots International", age: "12" },
    { name: "Belinda Somako", school: "Tiny Tots International", age: "14" },
    { name: "Christina Somako", school: "Tiny Tots International", age: "15" },
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
        data={students}
        renderItem={({ item, index }) => (
          <StudentCard item={item} index={index} />
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
