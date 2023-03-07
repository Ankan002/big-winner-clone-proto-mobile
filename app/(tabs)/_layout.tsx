import { MaterialIcons } from '@expo/vector-icons';
import { colors } from 'constants/colors';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: colors.lightGrey,
        tabBarActiveTintColor: colors.primaryOrange,
        tabBarShowLabel: false
      }}>
      <Tabs.Screen
        name="(home)/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={30} color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <MaterialIcons name="settings" size={30} color={color} />,
          headerShown: false
        }}
      />
    </Tabs>
  );
}
