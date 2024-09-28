import {  View, StyleSheet, Image } from 'react-native';

const d = 100;

export default function LogoUVV() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logoUVV.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: '50%',
    backgroundColor: 'rgba(242,242,242, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  logo: {
    height: d,
    width: d,
  }
});
