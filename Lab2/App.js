import { StyleSheet, Text, View } from 'react-native';
import MayTinh from './Views/MayTinh';

export default function App() {
  return (
    <MayTinh />
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
