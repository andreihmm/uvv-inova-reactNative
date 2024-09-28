import { Text, StyleSheet, View } from 'react-native';

import {info} from '../data/dados';

import Card from '../components/Card';
// or any files within the Snack

export default function App() {
  return (
    <View style={styles.container}>
      { 
        info.map(x => <Card elemento={x}/>)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    overflow: 'scroll'
  },
});
