import React from "react";
// React Native
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";
// Styles
import { MiniCardStyles } from "./style";

export default function MiniCard({ icon, cardText }) {
  return (
    <View>
      <TouchableOpacity style={MiniCardStyles.miniCard}>
        {icon}
        <Text style={MiniCardStyles.cardText}>{cardText}</Text>
      </TouchableOpacity>
    </View>
  );
}
