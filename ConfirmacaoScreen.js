import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function ConfirmacaoScreen({ route, navigation }) {

  const {
    restaurante,
    nome,
    telefone,
    data,
    horario,
    pessoas,
  } = route.params;

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        ✅ Reserva Confirmada
      </Text>

      <View style={styles.card}>

        <Text style={styles.item}>
          🍽️ Restaurante:
        </Text>

        <Text style={styles.valor}>
          {restaurante.nome}
        </Text>

        <Text style={styles.item}>
          👤 Cliente:
        </Text>

        <Text style={styles.valor}>
          {nome}
        </Text>

        <Text style={styles.item}>
          📞 Telefone:
        </Text>

        <Text style={styles.valor}>
          {telefone}
        </Text>

        <Text style={styles.item}>
          📅 Data:
        </Text>

        <Text style={styles.valor}>
          {data}
        </Text>

        <Text style={styles.item}>
          🕒 Horário:
        </Text>

        <Text style={styles.valor}>
          {horario}
        </Text>

        <Text style={styles.item}>
          👥 Pessoas:
        </Text>

        <Text style={styles.valor}>
          {pessoas}
        </Text>

      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Home')}
      >

        <Text style={styles.textoBotao}>
          Voltar ao Início
        </Text>

      </TouchableOpacity>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    marginBottom: 30,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    elevation: 3,
  },

  item: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },

  valor: {
    fontSize: 17,
    color: '#555',
    marginTop: 3,
  },

  botao: {
    backgroundColor: '#FF6600',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

});