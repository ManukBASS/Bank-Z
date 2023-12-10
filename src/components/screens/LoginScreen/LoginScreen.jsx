import { useState } from "react";
// React Native
import { View, Text, SafeAreaView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// React Native Elements
import { Button, Input } from "@rneui/themed";
// Styles
import { LoginScreenStyles } from "./styles";

export function LoginScreen({ navigation }) {
  const { top } = useSafeAreaInsets();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <SafeAreaView style={{ top: top, ...LoginScreenStyles.containerLogin }}>
      <View style={{ marginHorizontal: 20 }}>
        <Text style={LoginScreenStyles.title}>Log In</Text>
        <View>
          <Input
            placeholder="Email"
            placeholderTextColor={"white"}
            inputStyle={{ color: "white" }}
            onChangeText={(text) => setUser({ ...user, email: text })}
          />
          <Input
            placeholder="Password"
            secureTextEntry
            placeholderTextColor={"white"}
            inputStyle={{ color: "white" }}
            onChangeText={(text) => setUser({ ...user, password: text })}
          />
        </View>
        <View style={LoginScreenStyles.button}>
          <Button
            title={"Enter"}
            type="outline"
            containerStyle={{
              backgroundColor: "#00ffa8",
              width: 200,
              borderRadius: 5,
            }}
            buttonStyle={{
              borderWidth: 1,
              borderColor: "#00ffa8",
            }}
            titleStyle={{
              color: "black",
            }}
            onPress={handleSubmit}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
