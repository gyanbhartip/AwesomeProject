import { StyleSheet } from 'react-native';

import Screen from './app/components/Screen';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {
  return (
    <Screen style={styles.container}>
      <LoginScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
