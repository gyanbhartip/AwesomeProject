import { StyleSheet } from 'react-native';

import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';

export default function App() {
  return (
    <Screen style={styles.container}>
      <AccountScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
