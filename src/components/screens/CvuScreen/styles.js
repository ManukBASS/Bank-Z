import { StyleSheet } from "react-native";

export const CvuScreenStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#161717",
        justifyContent: "center"
    },
    title: {
        textAlign: "center",
        color: "white",
        fontSize: 30,
        marginBottom: 30
    },
    dataContainer: {
        backgroundColor: "#282929",
        borderRadius: 5,
        mb: 50,
        marginHorizontal: 20
    },
    dataCard: {
        backgroundColor: "#161717",
        height: 60,
        margin: 10,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15
    },
    dataText: {
        color: "white",
        fontSize: 16
    },
    button: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: "#282929"
    },
    tooltip: {
        position: "absolute",
        backgroundColor: "#00ffa8",
        borderRadius: 5,
        width: 90,
        height: 30,
        top: -30,
        justifyContent: "center",
        alignItems: "center",
    }
})