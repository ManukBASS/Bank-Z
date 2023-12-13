import React from "react";
// React Native
import { View, Text, TouchableOpacity } from "react-native";
// RN Elements
import { Avatar } from "@rneui/base";
// Styles
import { CardMovementStyles } from "./styles";

export function CardMovement({ movement, showMoney }) {
  const dateFormat = new Date(movement?.date?.seconds * 1000);
  const formatedDate = `${dateFormat.getDate()}/${(dateFormat.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${dateFormat.getFullYear()} ${(dateFormat.getHours() - 3)
    .toString()
    .padStart(2, "0")}:${dateFormat.getMinutes().toString().padStart(2, "0")}`;

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
          <Text style={CardMovementStyles.movementDate}>{formatedDate}</Text>
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
