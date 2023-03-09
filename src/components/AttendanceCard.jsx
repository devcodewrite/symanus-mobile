import { StyleSheet, Text, View } from "react-native";

export default function AttendanceCard() {
  return (
    <View style={styles.container}>
      <Text>Student Name</Text>
      <Text>GHC 2000</Text>
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
