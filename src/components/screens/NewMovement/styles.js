import { StyleSheet } from "react-native";

export const NewMovementStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#161717",
        paddingTop: 40
    },
    title: {
        color: "white",
        textAlign: "center",
        fontSize: 30,
        marginVertical: 30,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 20,
        gap: 20
    },
    movementType: {
        flexDirection: "row",
        justifyContent: "center"
    },
    formContainer: {
        backgroundColor: "#292829",
        borderRadius: 5,
        padding: 20,
        marginHorizontal: 20,
    },
    addMovementButton: {
        flexDirection: "row",
        justifyContent: "center"
    }
})