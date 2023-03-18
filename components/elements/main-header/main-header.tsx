import { View, Text } from "react-native";
import { styles } from "./styles";

interface Props {
    title: string;
}

const MainHeader = (props: Props) => {
    const { title } = props;

    return (
        <View style={styles.HeaderConatiner}>
            <Text style={styles.Heading}>{title}</Text>
        </View>
    );
};

export default MainHeader;
