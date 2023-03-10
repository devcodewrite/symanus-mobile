import { View } from "react-native";
import { Text } from "react-native-ui-lib";

export default function Home() {
  return (
    <View>
      <ActionBar
        actions={[
          { label: "Symanus Mobile", onPress: () => console.log("clicked!") },
          { label: "Scan QR", onPress: () => console.log("clicked!") },
        ]}
      />
      <Text>Home Page</Text>
    </View>
  );
}
