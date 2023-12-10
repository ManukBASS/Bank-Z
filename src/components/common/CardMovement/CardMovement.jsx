import React from "react";
// React Native
import { View, Text, TouchableOpacity } from "react-native";
// RN Elements
import { Avatar } from "@rneui/base";
// Styles
import { CardMovementStyles } from "./styles";

export default function CardMovement({ movement, showMoney }) {
  return (
    <TouchableOpacity style={CardMovementStyles.cardMovement}>
      <View style={CardMovementStyles.movementContainer}>
        <Avatar
          size={32}
          rounded
          source={{
            uri:
              movement.userAvatar ||
              "https://randomuser.me/api/portraits/men/36.jpg",
          }}
        />
        <View style={{ width: 150 }}>
          <Text style={CardMovementStyles.movementName}>{movement.name}</Text>
          <Text style={CardMovementStyles.movementDate}>{movement.date}</Text>
        </View>
        <Text
          style={{
            ...CardMovementStyles.movementAmount,
            backgroundColor: movement.amount >= 0 ? "#08A045" : "#a70009",
          }}
        >
          {showMoney
            ? movement.amount.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
            : "$ ******"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
