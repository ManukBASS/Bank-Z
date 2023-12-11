import React from "react";
// React Native
import { View, Text, TouchableOpacity } from "react-native";

// Styles
import { MiniCardStyles } from "./style";

export function MiniCard({ icon, cardText, navigation }) {
  return (
    <View>
      <TouchableOpacity
        style={MiniCardStyles.miniCard}
        onPress={navigation}
        activeOpacity={0.4}
      >
        {icon}
        <Text style={MiniCardStyles.cardText}>{cardText}</Text>
      </TouchableOpacity>
    </View>
  );
}
