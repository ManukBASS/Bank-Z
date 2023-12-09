import React, { useState } from "react";
// React Native
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// Components
import MiniCard from "../../common/MiniCards/MiniCard";
// Styles
import { HomeScreenStyles } from "./styles";
// Icons
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

// ? Min 37:10 del 2do Video !!

export function HomeScreen() {
  const { top } = useSafeAreaInsets();
  const [showMoney, setShowMoney] = useState(true);
  let num = 1000;
  return (
    <SafeAreaView style={{ ...HomeScreenStyles.containerHome, top: top }}>
      <ScrollView
        style={HomeScreenStyles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={HomeScreenStyles.containerAmount}>
          <Text style={HomeScreenStyles.amountTitle}>Salary</Text>
          <View style={HomeScreenStyles.cardMoney}>
            <FontAwesome5 name="money-bill-alt" size={40} color="#00ffa8" />
            {showMoney ? (
              <Text style={HomeScreenStyles.amountNumber}>
                {num.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
                .-
              </Text>
            ) : (
              <Text style={HomeScreenStyles.amountNumber}>$ ****** .-</Text>
            )}

            {showMoney ? (
              <Ionicons
                name="eye"
                size={40}
                color="#00ffa8"
                onPress={() => setShowMoney(false)}
              />
            ) : (
              <Ionicons
                name="eye-off"
                size={40}
                color="#00ffa8"
                onPress={() => setShowMoney(true)}
              />
            )}
          </View>
        </View>
        <View style={HomeScreenStyles.containerMiniCard}>
          <MiniCard
            icon={<FontAwesome5 name="newspaper" size={24} color="#00ffa8" />}
            cardText={"CVU"}
          />
          <MiniCard
            icon={<FontAwesome5 name="history" size={24} color="#00ffa8" />}
            cardText={"Statement"}
          />
          <MiniCard
            icon={<FontAwesome5 name="credit-card" size={24} color="#00ffa8" />}
            cardText={"Cards"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
