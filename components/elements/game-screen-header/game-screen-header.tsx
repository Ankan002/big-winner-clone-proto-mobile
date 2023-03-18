import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { colors } from "constants/colors";
import { useRouter } from "expo-router";

interface Props {
    gameTitle: string;
}

const GameScreenHeader = (props: Props) => {
    const { gameTitle } = props;

    const router = useRouter();

    const onBackClick = () => {
        router.back();
    };

    return (
        <View style={styles.HeaderConatiner}>
            <Pressable style={styles.BackButton} onPress={onBackClick}>
                <Entypo
                    name="chevron-left"
                    size={25}
                    color={colors.primaryDark}
                />
            </Pressable>
            <Text ellipsizeMode="tail" style={styles.TitleText}>
                {gameTitle}
            </Text>
        </View>
    );
};

export default GameScreenHeader;
