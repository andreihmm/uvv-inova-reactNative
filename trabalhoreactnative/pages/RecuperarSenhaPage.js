import { Text, SafeAreaView, StyleSheet, View, Butto, ImageBackground, TextInput } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

import { Link } from '@react-navigation/native';


// or any files within the Snack


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
          <Text style={styles.descricao}>Caso haja uma conta registrada com o e-mail inserido, um código de recuperação será enviado para ela</Text>
          <TextInput
            style={styles.inputTexto}
            placeholder='E-mail'
          />

        </View>
                             <TextInput
            style={styles.inputTexto}
            placeholder='Código recebido'
          />   
      </View>

      <Link to='/'
      style={styles.botoes}>Enviar código para e-mail</Link>
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
    justifyContent: 'space-evenly'
  },
  descricao:{
    fontSize: '10px',
  },
  inputTexto: {
    backgroundColor: 'white',
    borderColor: '#000000',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderRadius: '5px',
    padding: '9px',
    margin: '5px'
  },
  botoes: {
    borderRadius: '5px',
    backgroundColor: '#023373',
    width: '80%',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    borderRightWidth: '1px',
    borderBottomWidth: '1px',
    borderColor: 'white'
    }
});
