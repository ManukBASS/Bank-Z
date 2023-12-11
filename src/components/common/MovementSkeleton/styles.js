import { StyleSheet } from "react-native";

export const MovementSkeletonStyles = StyleSheet.create({
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
    skeletonContainer: {
        flexDirection: "row",
        gap: 15,
        alignItems: "center"
    }
})