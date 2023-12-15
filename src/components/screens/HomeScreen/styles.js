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
    },
    containerMovementsSubtitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 20
    },
    containerMovementsList: {
        minHeight: 300,
        backgroundColor: "#282929",
        borderRadius: 5,
        marginBottom: 50
    },
    centeredModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        backgroundColor: "#00ffa8",
        borderRadius: 5,
        padding: 25,
        alignItems: "center",
        margin: 20
    },
    modalText: {
        color: "#282929",
        fontSize: 18,
        textAlign: "center",
        marginBottom: 15
    }
})