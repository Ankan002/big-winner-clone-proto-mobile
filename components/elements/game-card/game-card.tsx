import { useRouter } from "expo-router";
import { Text, Pressable, Image } from "react-native";
import { styles } from "./styles";

const SpinWheelGameLogo = require("assets/game-logos/spin-wheel-game-logo.png");

interface Props {
    gameName: string;
}

const GameCard = (props: Props) => {
    const { gameName } = props;
    const router = useRouter();

    const onCardClick = () => {
        router.push("games/spin-wheel");
    }

    return (
        <Pressable style={styles.Card} onPress={onCardClick}>
            <Image source={SpinWheelGameLogo} style={styles.SpinWheelGameLogo} />
            <Text style={styles.CardText}>{gameName}</Text>
        </Pressable>
    );
};

export default GameCard;
