// React Native
import { createStackNavigator } from "@react-navigation/stack";
// Components
import { LoginScreen } from "../components/screens/LoginScreen/LoginScreen";
import { HomeScreen } from "../components/screens/HomeScreen/HomeScreen";
import { CvuScreen } from "../components/screens/CvuScreen/CvuScreen";

const Stack = createStackNavigator();

export function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Cvu" component={CvuScreen} />
    </Stack.Navigator>
  );
}
