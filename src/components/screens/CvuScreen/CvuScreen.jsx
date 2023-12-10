// React Native
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CvuScreen() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ top: top }}>
      <Text>CvuScreen</Text>
    </View>
  );
}
