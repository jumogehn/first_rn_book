import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import MyButton from './MyButton';

export default function App() {
  return (
    <View style={styles.container}>
      <MyButton />
      <MyButton title='My Button 2' onPress={() => alert('2')}>My Button 3</MyButton>
      <MyButton onPress={() => alert('3')}>Good</MyButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
