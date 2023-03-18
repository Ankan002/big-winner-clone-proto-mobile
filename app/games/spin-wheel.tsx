import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";
import { GameScreenHeader } from "components/elements";
import { colors } from "constants/colors";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

export default function SpinWheelScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <GameScreenHeader gameTitle="Wheel Of Fortune" />
            <ExpoStatusBar style="dark" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryLight,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
