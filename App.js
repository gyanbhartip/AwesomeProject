import { StyleSheet } from 'react-native';

import Screen from './app/components/Screen';
import ListingsEditScreen from './app/screens/ListingsEditScreen';

export default function App() {
  return (
    <Screen style={styles.container}>
      <ListingsEditScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
