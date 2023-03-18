import { GameCard, MainHeader } from "components/elements";
import { colors } from "constants/colors";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    ScrollView,
    View,
} from "react-native";

export default function Home() {
    return (
        <SafeAreaView style={styles.Container}>
            <MainHeader title="Home" />
            <ScrollView style={styles.ScrollConatiner}>
                <View style={styles.GameCardContainer}>
                    <GameCard gameName="Spin Wheel" />
                </View>
            </ScrollView>
            <ExpoStatusBar style="dark" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.primaryLight,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    ScrollConatiner: {
        flex: 1,
        paddingHorizontal: 10,
        marginTop: 15,
    },
    GameCardContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        columnGap:20,
        rowGap: 10,
        alignItems: "center",
        justifyContent: "center"
    }
});
