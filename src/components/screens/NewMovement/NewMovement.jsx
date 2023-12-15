// React
import React, { useEffect, useState } from "react";
// React Native
import { SafeAreaView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// RN Elements
import { Button, Input } from "@rneui/base";
// Styles
import { NewMovementStyles } from "./styles";
//Firebase
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export function NewMovement({ navigation }) {
  const { top } = useSafeAreaInsets();
  const [typeMovement, setTypeMovement] = useState("Income");
  const [movement, setMovement] = useState({
    amount: 0,
    name: "",
    userAvatar: "",
  });

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 1000);
    const imageUrl = `https://picsum.photos/200/200?random=${randomNumber}`;
    setMovement({ ...movement, userAvatar: imageUrl });
  }, []);

  const addNewMovement = () => {
    const amount =
      typeMovement === "Income"
        ? Number(movement.amount)
        : -Number(movement.amount);

    let newMovement = {
      ...movement,
      amount,
      date: serverTimestamp(),
    };

    const movementCollection = collection(db, "movements");
    addDoc(movementCollection, newMovement).then(() => {
      navigation.navigate("HomeScreen");
    });
  };

  return (
    <SafeAreaView style={{ ...NewMovementStyles.mainContainer, top: top }}>
      <Text style={NewMovementStyles.title}>Add Movement</Text>
      <View style={NewMovementStyles.buttonsContainer}>
        <View style={NewMovementStyles.movementType}>
          <Button
            title={"Income"}
            type="Outline"
            containerStyle={{
              width: 150,
              backgroundColor:
                typeMovement === "Income" ? "#00ffa8" : "transparent",
              borderRadius: 5,
            }}
            titleStyle={{
              color: typeMovement === "Income" ? "black" : "white",
            }}
            buttonStyle={{ borderColor: "#00ffa8", borderWidth: 1 }}
            onPress={() => setTypeMovement("Income")}
          />
        </View>
        <View style={NewMovementStyles.movementType}>
          <Button
            title={"Withdrawal"}
            type="Outline"
            containerStyle={{
              width: 150,
              backgroundColor:
                typeMovement === "Withdrawal" ? "#00ffa8" : "transparent",
              borderRadius: 5,
            }}
            titleStyle={{
              color: typeMovement === "Withdrawal" ? "black" : "white",
            }}
            buttonStyle={{ borderColor: "#00ffa8", borderWidth: 1 }}
            onPress={() => setTypeMovement("Withdrawal")}
          />
        </View>
      </View>

      <View style={NewMovementStyles.formContainer}>
        <Input
          placeholder="Amount"
          keyboardType="numeric"
          placeholderTextColor={"white"}
          inputStyle={{ color: "white" }}
          onChangeText={(text) => setMovement({ ...movement, amount: text })}
        />
        <Input
          placeholder={typeMovement === "Income" ? "Origin" : "Destiny"}
          placeholderTextColor={"white"}
          inputStyle={{ color: "white" }}
          onChangeText={(text) => setMovement({ ...movement, name: text })}
        />
        <View style={NewMovementStyles.addMovementButton}>
          <Button
            title={"Add"}
            type="outline"
            onPress={addNewMovement}
            containerStyle={{
              width: 170,
              backgroundColor: "#00ffa8",
              borderRadius: 5,
            }}
            titleStyle={{
              color: "black",
            }}
            buttonStyle={{
              borderWidth: 1,
              borderColor: "#00ffa8",
            }}
          />
        </View>
      </View>
      <View style={{ ...NewMovementStyles.addMovementButton, marginTop: 60 }}>
        <Button
          title={"Go Back"}
          type="outline"
          onPress={() => navigation.navigate("HomeScreen")}
          containerStyle={{
            width: 170,
            backgroundColor: "#00ffa8",
            borderRadius: 5,
          }}
          titleStyle={{
            color: "black",
          }}
          buttonStyle={{
            borderWidth: 1,
            borderColor: "#00ffa8",
          }}
        />
      </View>
    </SafeAreaView>
  );
}
