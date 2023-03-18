import { colors } from "constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    HeaderConatiner: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    BackButton: {
        padding: 4,
        borderWidth: 2,
        borderColor: colors.primaryDark,
        backgroundColor: colors.primaryYellow,
        borderRadius: 10
    },
    TitleText: {
        fontSize: 20,
        flexShrink: 1,
        marginLeft: 10,
        letterSpacing: 1.5
    }
});
