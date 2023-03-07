import { colors } from 'constants/colors';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryLight
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
