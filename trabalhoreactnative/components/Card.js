import {View, Text, StyleSheet} from 'react-native';

export default function Card({elemento})
{
  return (
    <View style={styles.card}>
      <Text style={styles.props}> Nome do grupo: </Text> <Text> {elemento.nome} </Text> 
      <Text style={styles.props}> Descrição do projeto: </Text> <Text>{elemento.descricao} </Text>
      <Text style={styles.props}> Integrantes: </Text>
      {elemento.integrantes.map(integrante => <Text> => {integrante} </Text>)}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: '20px',
    borderRadius: '20px',
    margin: '20px',
  },
  props: {
    fontWeight: 'bold',
  }
})