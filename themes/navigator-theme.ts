import { DefaultTheme, Theme } from "@react-navigation/native";
import { colors } from "constants/colors";

export const DefaultNavigatorTheme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        card: colors.secondaryLight,
        border: colors.semiTransparent
    }
}
