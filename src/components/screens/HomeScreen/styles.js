import { StyleSheet } from "react-native";

export const HomeScreenStyles = StyleSheet.create({
    containerHome: {
        backgroundColor: "#161717",
        flex: 1,
    },
    scrollViewContainer: {
        marginHorizontal: 20,
        paddingVertical: 20
    },
    containerAmount: {
        backgroundColor: "#282929",
        borderRadius: 5,
        color: "white"
    },
    amountTitle: {
        fontSize: 20,
        paddingLeft: 10,
        paddingTop: 10,
        color: "white"
    },
    cardMoney: {
        flexDirection: "row",
        height: 80,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    amountNumber: {
        color: "white",
        fontSize: 25
    },
    containerMiniCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10
    }
})