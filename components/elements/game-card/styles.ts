import { colors } from "constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Card: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: colors.primaryYellow,
        borderWidth: 1,
        borderColor: colors.primaryDark,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 150,
    },
    CardText: {
        fontSize: 18,
        letterSpacing: 1.5,
        flexWrap: "wrap",
        textAlign: "center",
        marginTop: 10,
    },
    SpinWheelGameLogo: {
        width: 100,
        height: 100,
        resizeMode: "contain"
    }
});
