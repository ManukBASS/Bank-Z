import React, { useEffect, useState } from "react";
// React Native
import { View, Text, SafeAreaView, ScrollView, Modal } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// RN Elements
import { Button } from "@rneui/base";
// Firebase
import { db } from "../../../firebaseConfig";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
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
  const [modalVisible, setModalVisible] = useState(false);
  const [movementToDelete, setMovementToDelete] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleModal = (movement) => {
    setModalVisible(true);
    setMovementToDelete(movement);
  };

  const confirmDelete = async () => {
    setIsDeleted(true);
    setModalVisible(false);
    setMovements([]);

    await deleteDoc(doc(db, "movements", movementToDelete.id));
    setMovementToDelete(null);
  };

  let totalAmount = movements.reduce((acc, movement) => {
    return acc + movement.amount;
  }, 0);

  useEffect(() => {
    setIsDeleted(false);
    let movementsCollection = collection(db, "movements");
    getDocs(movementsCollection)
      .then((res) => {
        let arrayMovements = res.docs.map((movement) => {
          return { id: movement.id, ...movement.data() };
        });
        setMovements(arrayMovements);
      })
      .catch((error) => console.log(error));
  }, [isDeleted]);

  return (
    <SafeAreaView style={{ ...HomeScreenStyles.containerHome, top: top }}>
      {/* SALARY */}
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
            onPress={() => navigation.replace("NewMovement")}
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
              handleModal={handleModal}
            />
          ))}
        </View>
      </ScrollView>
      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={HomeScreenStyles.centeredModal}>
          <View style={HomeScreenStyles.modalView}>
            <Text style={HomeScreenStyles.modalText}>
              Are you sure you want to delete {movementToDelete?.name}?
            </Text>
            <View style={{ gap: 15 }}>
              <Button
                title={"Delete"}
                type="outlie"
                containerStyle={{
                  width: 170,
                  backgroundColor: "#161717",
                  borderRadius: 5,
                }}
                titleStyle={{
                  color: "whitesmoke",
                }}
                buttonStyle={{
                  borderWidth: 1,
                  borderColor: "#161717",
                }}
                onPress={confirmDelete}
              />
              <Button
                title={"Cancel"}
                type="outlie"
                containerStyle={{
                  width: 170,
                  backgroundColor: "#161717",
                  borderRadius: 5,
                }}
                titleStyle={{
                  color: "whitesmoke",
                }}
                buttonStyle={{
                  borderWidth: 1,
                  borderColor: "#161717",
                }}
                onPress={() => {
                  setModalVisible(false);
                  setMovementToDelete(null);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
