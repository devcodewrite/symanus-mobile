import { StyleSheet, Text, View } from "react-native";

export default function StudentCard() {
  return (
    <View style={styles.container}>
      <Text>Student School Name</Text>
      <Text>Student Name</Text>
      <Text>Student Age</Text>
      <StatusBar style="auto" />
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
