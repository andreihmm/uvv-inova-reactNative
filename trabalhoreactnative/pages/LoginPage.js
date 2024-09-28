import { Text, StyleSheet, View, Button, Alert, ImageBackground, TextInput } from 'react-native';

import { Link } from '@react-navigation/native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

import LogoUVV from '../components/logoUVV.js';

// or any files within the Snack

const uvvImagem = {uri: 'https://uvv.br/wp-content/uploads/Fachada_UVV-3.jpg'};


export default function App() {

  return (
  <ImageBackground source={uvvImagem} resizeMode="cover" style={styles.uvvImagem}>
    <View style={styles.viewInputs}>
      <LogoUVV/>
      
      <View style={styles.viewDigitarDados}>
        <View>
          <TextInput
            style={styles.inputTexto}
            placeholder='Username ou email'
          />
        </View>
          
        <View>
          <TextInput
            style={styles.inputTexto}
            placeholder='Senha'
          />
          <Link to='/RecuperarSenha'
          style={{borderBottomWidth: 1, borderColor: 'black', width: 'fit-content'}}>Esqueci minha senha/username</Link>
        </View>
            

          
        </View>

        <Link to='/Main'
        style={styles.botoes}>Conectar-se</Link>
        <Link to='/Register'
        style={styles.botoes}>Registrar</Link>
      </View>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  uvvImagem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  viewInputs: {
    borderRadius: '10px',
    flex: 1,
    display: 'flex',
    backgroundColor: 'rgba(0,0,0,0.5)',
    maxHeight: '70%',
    width: '90%',
    alignItems: 'center',
    justifyContent:'space-around'
  },
  viewDigitarDados: {
    borderRadius: '5px',
    backgroundColor: 'rgba(247,194,34,0.9)',
    height: '40%',
    width: '80%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  inputTexto: {
    backgroundColor: 'white',
    borderColor: '#000000',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderRadius: '5px',
    padding: '9px',
  },
  botoes: {
    borderRadius: '5px',
    backgroundColor: '#023373',
    width: '80%',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    borderRightWidth: '1px',
    borderBottomWidth: '1px',
    borderColor: 'white'
    }
});
