import React, { useEffect, useState } from "react";
// React Native
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// RN Elements
import { Button } from "@rneui/base";
// Firebase
import { db } from "../../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
// Components
import { MiniCard } from "../../common/MiniCards/MiniCard";
import { CardMovement } from "../../common/CardMovement/CardMovement";
import { CardMovementSkeleton } from "../../common/MovementSkeleton/CardMovementSkeleton";
// Styles
import { HomeScreenStyles } from "./styles";
// Icons
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export function HomeScreen({ navigation }) {
  const { top } = useSafeAreaInsets();

  const [showMoney, setShowMoney] = useState(true);
  const [movements, setMovements] = useState([]);

  let totalAmount = movements.reduce((acc, movement) => {
    return acc + movement.amount;
  }, 0);

  useEffect(() => {
    let movementsCollection = collection(db, "movements");
    getDocs(movementsCollection)
      .then((res) => {
        let arrayMovements = res.docs.map((movement) => {
          return { id: movement.id, ...movement.data() };
        });
        setMovements(arrayMovements);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <SafeAreaView style={{ ...HomeScreenStyles.containerHome, top: top }}>
      <ScrollView
        style={HomeScreenStyles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* SALARY */}
        <View style={HomeScreenStyles.containerAmount}>
          <Text style={HomeScreenStyles.amountTitle}>Salary</Text>
          <View style={HomeScreenStyles.cardMoney}>
            <FontAwesome5 name="money-bill-alt" size={40} color="#00ffa8" />
            {showMoney ? (
              <Text style={HomeScreenStyles.amountNumber}>
                {totalAmount.toLocaleString("en-US", {
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
        {/* MINI CARDS */}
        <View style={HomeScreenStyles.containerMiniCard}>
          <MiniCard
            icon={<FontAwesome5 name="newspaper" size={24} color="#00ffa8" />}
            cardText={"CVU"}
            navigation={() => navigation.navigate("Cvu")}
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
        {/* MOVEMENTS SUBTITLE */}
        <View style={HomeScreenStyles.containerMovementsSubtitle}>
          <Text style={{ fontSize: 16, color: "white" }}>Recent Movements</Text>
          <Button
            title={"New Movement"}
            type="outline"
            onPress={() => navigation.navigate("NewMovement")}
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

        {/* MOVEMENTS LIST */}
        <View style={HomeScreenStyles.containerMovementsList}>
          {movements.length === 0 && (
            <>
              <CardMovementSkeleton />
              <CardMovementSkeleton />
              <CardMovementSkeleton />
              <CardMovementSkeleton />
            </>
          )}
          {movements.map((movement) => (
            <CardMovement
              key={movement.id}
              movement={movement}
              showMoney={showMoney}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
