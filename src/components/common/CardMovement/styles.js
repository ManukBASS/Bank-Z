import { StyleSheet } from "react-native";

export const CardMovementStyles = StyleSheet.create({
    cardMovement: {
        height: 60,
        backgroundColor: "#161717",
        margin: 10,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    movementContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15
    },
    movementName: {
        color: "white",
        fontSize: 16,
        maxWidth: 150
    },
    movementDate: {
        color: "white",
        fontSize: 11
    },
    movementAmount: {
        color: "white",
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontWeight: "bold",
        borderRadius: 5,
        width: 120,
        height: 30,
        textAlign: "center"
    }
})