import { Text, Pressable, Image } from "react-native";
import { styles } from "./styles";

const SpinWheelGameLogo = require("assets/game-logos/spin-wheel-game-logo.png");

interface Props {
    gameName: string;
}

const GameCard = (props: Props) => {
    const { gameName } = props;

    return (
        <Pressable style={styles.Card}>
            <Image source={SpinWheelGameLogo} style={styles.SpinWheelGameLogo} />
            <Text style={styles.CardText}>{gameName}</Text>
        </Pressable>
    );
};

export default GameCard;
