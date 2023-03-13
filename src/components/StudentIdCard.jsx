import { StackActions, useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Colors, Text, View } from "react-native-ui-lib";
import { SCREENS } from "../enums";

export default function StudentIdCard({ item, index }) {
  const nav = useNavigation();
  return (
    <Pressable
      flex-1
      style={{ marginBottom: 20 }}
      padding={20}
      width={"100%"}
      onPress={() => nav.navigate(SCREENS.Student)}
      backgroundColor={Colors.green80}
    >
      <Text text60>{item.name ?? "N/A"}</Text>
      <Text>{item.school ?? "N/A"}</Text>
      <Text>{item.age ?? "N/A"}</Text>
    </Pressable>
  );
}
