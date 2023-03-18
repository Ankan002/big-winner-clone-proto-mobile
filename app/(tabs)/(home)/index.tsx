import { MainHeader } from "components/elements";
import { colors } from "constants/colors";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <MainHeader title="Home" />
            <ExpoStatusBar style="dark" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryLight,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
});
