import { StyleSheet, View } from "react-native";
import { Colors, Text } from "react-native-ui-lib";

export default function BillsCard({ item, index }) {
  return (
    <View
      width={"100%"}
      style={{
        marginBottom: 20,
        padding: 20,
      }}
      backgroundColor={Colors.green80}
    >
      <Text text60>{item.name ?? "N/A"}</Text>
      <Text>{item.date ?? "N/A"}</Text>
    </View>
  );
}
