import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";
import { MainHeader } from "components/elements";
import { colors } from "constants/colors";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

export default function SettingsScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <MainHeader title="Settings" />
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
