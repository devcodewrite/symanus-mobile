import { StyleSheet, View } from "react-native";
import { Colors, Text } from "react-native-ui-lib";

export default function StudentAttendanceCard({ item, index }) {
  return (
    <View
      width={"100%"}
      style={{
        marginBottom: 20,
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
      }}
      backgroundColor={Colors.green80}
    >
      <View style={{ marginEnd: 20 }}>
        <Text text40>16th</Text>
      </View>
      <View>
        <Text text60>{item.name ?? "Teacher N/A"}</Text>
        <Text>{item.date ?? "N/A"}</Text>
      </View>
    </View>
  );
}
