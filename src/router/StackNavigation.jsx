// React Native
import { createStackNavigator } from "@react-navigation/stack";
// Components
import { LoginScreen } from "../components/screens/LoginScreen";

const Stack = createStackNavigator();

export function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
